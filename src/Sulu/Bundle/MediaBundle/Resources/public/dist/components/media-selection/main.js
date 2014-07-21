define(["sulumedia/collection/collections"],function(a){"use strict";var b={visibleItems:999,instanceName:null,url:"",idsParameter:"ids",preselected:{ids:[],displayOption:"top",config:{}},idKey:"id",titleKey:"title",thumbnailKey:"thumbnails",thumbnailSize:"50x50",resultKey:"media",positionSelectedClass:"selected",translations:{noMediaSelected:"media-selection.nomedia-selected",addImages:"media-selection.add-images",choose:"public.choose",collections:"media-selection.collections",visible:"public.visible",of:"public.of"}},c={ids:[],displayOption:"top",config:{}},d="sulu.media-selection.",e=function(){return i.call(this,"input-retrieved")},f=function(){return i.call(this,"data-changed")},g=function(){return i.call(this,"data-request")},h=function(){return i.call(this,"data-retrieved")},i=function(a){return d+(this.options.instanceName?this.options.instanceName+".":"")+a},j={skeleton:function(a){return['<div class="white-box form-element" id="',a.ids.container,'">','   <div class="header">','       <span class="fa-plus-circle icon left action" id="',a.ids.addButton,'"></span>','       <div class="position">','<div class="husky-position" id="',a.ids.displayOption,'">','    <div class="top left" data-position="leftTop"></div>','    <div class="top middle" data-position="top"></div>','    <div class="top right" data-position="rightTop"></div>','    <div class="middle left" data-position="left"></div>','    <div class="middle middle inactive"></div>','    <div class="middle right" data-position="right"></div>','    <div class="bottom left" data-position="leftBottom"></div>','    <div class="bottom middle" data-position="bottom"></div>','    <div class="bottom right" data-position="rightBottom"></div>',"</div>","       </div>",'       <span class="fa-cog icon right border" id="',a.ids.configButton,'" style="display:none"></span>',"   </div>",'   <div class="content" id="',a.ids.content,'"></div>',"</div>"].join("")},noContent:function(a){return['<div class="no-content">','   <span class="fa-coffee icon"></span>','   <div class="text">',a,"</div>","</div>"].join("")},addTab:function(a,b){return['<div id="',a.ids.chooseTab,'">','   <div class="heading">',"       <h3>",b,"</h3>","   </div>",'   <div id="',a.ids.gridGroup,'"/>',"</div>"].join("")},contentItem:function(a,b,c,d){return['<li data-id="',a,'">','   <span class="num">',b,"</span>",'   <img src="',d,"/>",'   <span class="value">',c,"</span>",'   <span class="fa-times remove"></span>',"</li>"].join("")}},k=function(a){return"#"+this.options.ids[a]},l=function(){if(this.collections=new a,this.options.ids={container:"media-selection-"+this.options.instanceName+"-container",addButton:"media-selection-"+this.options.instanceName+"-add",configButton:"media-selection-"+this.options.instanceName+"-config",displayOption:"media-selection-"+this.options.instanceName+"-display-option",content:"media-selection-"+this.options.instanceName+"-content",chooseTab:"media-selection-"+this.options.instanceName+"-choose-tab",gridGroup:"media-selection-"+this.options.instanceName+"-grid-group"},this.sandbox.dom.html(this.$el,j.skeleton(this.options)),this.$container=this.sandbox.dom.find(k.call(this,"container"),this.$el),this.$content=this.sandbox.dom.find(k.call(this,"content"),this.$el),this.$addButton=this.sandbox.dom.find(k.call(this,"addButton"),this.$el),this.$configButton=this.sandbox.dom.find(k.call(this,"configButton"),this.$el),this.sandbox.dom.data(this.$el,"media-selection")){var b=this.sandbox.util.extend(!0,{},c,this.sandbox.dom.data(this.$el,"media-selection"));w.call(this,b)}else w.call(this,this.options.preselected);m.call(this),n.call(this),this.itemsVisible=this.options.visibleItems,this.URI={str:"",hasChanged:!1},x.call(this),z.call(this),r.call(this),v.call(this),o.call(this)},m=function(){var a=this.sandbox.translate(this.options.translations.noMediaSelected);this.sandbox.dom.html(this.$content,j.noContent(a))},n=function(){this.sandbox.on("husky.tabs.overlaymedia-selection."+this.options.instanceName+".add.initialized",function(){this.collections.fetch({success:function(a){this.sandbox.start([{name:"grid-group@suluadmin",options:{data:a.toJSON(),el:this.sandbox.dom.find(k.call(this,"gridGroup")),instanceName:this.options.instanceName,gridUrl:"/admin/api/media?collection=",preselected:this.data.ids,resultKey:this.options.resultKey,dataGridOptions:{view:"table",viewOptions:{table:{excludeFields:["id"],showHead:!1}},pagination:!1,matchings:[{name:"id"},{name:"thumbnails",translation:"thumbnails",type:"thumbnails"},{name:"title",translation:"title"}]}}}])}.bind(this)})}.bind(this)),this.sandbox.on(e.call(this),function(){x.call(this),v.call(this)}.bind(this)),this.sandbox.on(h.call(this),function(){p.call(this)}.bind(this))},o=function(){this.sandbox.dom.on(k.call(this,"displayOption")+" > div","click",y.bind(this))},p=function(){if(0!==this.items.length){for(var a,b=this.sandbox.dom.createElement('<ul class="items-list"/>'),c=-1,d=this.items.length;++c<d&&c<this.itemsVisible;)a=this.items[c][this.options.thumbnailKey][this.options.thumbnailSize],this.sandbox.dom.append(b,j.contentItem(this.items[c][this.options.idKey],c+1,this.items[c][this.options.titleKey],a));this.sandbox.dom.html(this.$content,b),q.call(this)}else m.call(this),u.call(this)},q=function(){this.itemsVisible=this.items.length<this.itemsVisible?this.items.length:this.itemsVisible,(null===this.$footer||void 0===this.$footer)&&(this.$footer=this.sandbox.dom.createElement('<div class="footer"/>')),this.sandbox.dom.html(this.$footer,["<span>","<strong>"+this.itemsVisible+" </strong>",this.sandbox.translate(this.options.translations.of)," ","<strong>"+this.items.length+" </strong>",this.sandbox.translate(this.options.translations.visible),"</span>"].join("")),this.sandbox.dom.append(this.$container,this.$footer)},r=function(){var a=j.addTab(this.options,this.sandbox.translate(this.options.translations.collections)),b=this.sandbox.dom.createElement("<div/>");this.sandbox.dom.append(this.$el,b),this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$addButton,cssClass:"media-selection-overlay",el:b,container:this.$el,instanceName:"media-selection."+this.options.instanceName+".add",skin:"wide",slides:[{title:this.sandbox.translate(this.options.translations.addImages),okCallback:s.bind(this),cssClass:"media-selection-overlay-add",tabs:[{title:this.sandbox.translate(this.options.translations.choose),data:a}]}]}}])},s=function(){var a=this.sandbox.data.deferred();this.sandbox.emit("sulu.grid-group."+this.options.instanceName+".get-selected-ids",function(b){w.call(this,{ids:b}),a.resolve()}.bind(this)),a.then(function(){this.sandbox.emit(e.call(this))}.bind(this))},t=function(){u.call(this);var a=this.sandbox.dom.createElement('<div class="loader"/>');this.sandbox.dom.html(this.$content,a),this.sandbox.start([{name:"loader@husky",options:{el:a,size:"100px",color:"#e4e4e4"}}])},u=function(){null!==this.$footer&&this.sandbox.dom.remove(this.$footer)},v=function(){this.URI.hasChanged===!0&&(this.sandbox.emit(g.call(this)),t.call(this),this.itemsVisible=this.options.visibleItems,this.sandbox.util.load(this.URI.str).then(function(a){this.items=a._embedded[this.options.resultKey],this.sandbox.emit(h.call(this))}.bind(this)).then(function(a){this.sandbox.logger.log(a)}.bind(this)))},w=function(a){for(var b in a)a.hasOwnProperty(b)&&(this.data[b]=a[b]);this.sandbox.dom.data(this.$el,"media-selection",this.data)},x=function(){var a=-1===this.options.url.indexOf("?")?"?":"&",b=[this.options.url,a,this.options.idsParameter,"=",(this.data.ids||[]).join(",")].join("");b!==this.URI.str?(""!==this.URI.str&&this.sandbox.emit(f.call(this),this.data,this.$el),this.URI.str=b,this.URI.hasChanged=!0):this.URI.hasChanged=!1},y=function(a){this.sandbox.dom.removeClass(this.sandbox.dom.find("."+this.options.positionSelectedClass,k.call(this,"displayOption")),this.options.positionSelectedClass),this.sandbox.dom.addClass(a.currentTarget,this.options.positionSelectedClass),w.call(this,{displayOption:this.sandbox.dom.data(a.currentTarget,"position")}),this.sandbox.emit(f.call(this),this.data,this.$el)},z=function(){var a=this.$find(k.call(this,"displayOption")),b=this.sandbox.dom.find('[data-position="'+this.data.displayOption+'"]',a);b.length&&this.sandbox.dom.addClass(b,this.options.positionSelectedClass)};return{historyClosed:!0,initialize:function(){this.options=this.sandbox.util.extend({},b,this.options),this.data={},l.call(this)}}});