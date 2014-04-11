<?php

namespace Sulu\Bundle\ContactBundle\Command;

use Sulu\Bundle\ContactBundle\Import\Import;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * The command to execute an import on the console
 * @package Sulu\Bundle\AuditBundle\Command
 */
class ImportCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this->setName('sulu:contacts:import')
            ->addArgument(
                'accountFile',
                InputArgument::REQUIRED,
                'accountFile of account file to import'
            )
            ->addArgument(
                'contactFile',
                InputArgument::OPTIONAL,
                'contact file to import'
            )
            ->addOption(
                'limit',
                'l',
                InputOption::VALUE_REQUIRED,
                'limit import by a number of rows'
            )
            ->addOption(
                'mappings',
                'm',
                InputOption::VALUE_REQUIRED,
                'json file containing mappings'
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $accountFile = $input->getArgument('accountFile');
        $contactFile = $input->getArgument('contactFile');

        $limit = $input->getOption('limit');
        $mappings = $input->getOption('mappings');


        /** @var Import $import */
        $import = $this->getContainer()->get('sulu_contact.import');


        // TODO: do not
        $import->setAccountFile($accountFile);

        if ($contactFile) {
            $import->setContactFile($contactFile);
        }

        // set limit number of columns to import
        if ($limit) {
            $import->setLimit($limit);
        }

        // import mappings
        if ($mappings && ($mappingsContent = file_get_contents($mappings))) {
            $mappings = json_decode($mappingsContent, true);
            if (array_key_exists('columns', $mappings)) {
                $import->setColumnMappings($mappings['columns']);
            }
            if (array_key_exists('ids', $mappings)) {
                $import->setIdMappings($mappings['ids']);
            }
            if (array_key_exists('options', $mappings)) {
                $import->setOptions($mappings['options']);
            }
            if (array_key_exists('countries', $mappings)) {
                $import->setCountryMappings($mappings['countries']);
            }
            if (array_key_exists('accountTypes', $mappings)) {
                $import->setAccountTypeMappings($mappings['accountTypes']);
            }
        }

        $import->execute();

        $output->writeln('Successfully imported file to Sulu Database!');
    }
}
