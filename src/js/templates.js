this["JST"] = this["JST"] || {};

this["JST"]["src/templates/carousel-template.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <li class=\"slide"
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n        <img width=\"640\" height=\"480\" src=\""
    + alias3((helpers.formatSrcUrl || (depth0 && depth0.formatSrcUrl) || alias2).call(alias1,depth0,{"name":"formatSrcUrl","hash":{},"data":data}))
    + "\" />\r\n        <p class=\"slide-title\"><span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></p>\r\n        </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"carousel\" tabindex=\"1\">\r\n    <ul id=\"slides\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n    <div id=\"controls\">\r\n    <div id=\"start-stop\" tabindex=\"2\">\r\n        <span class=\"fa fa-pause fa-lg\" ><span class=\"sr-only\">Pause</span></span>\r\n        <span class=\"fa fa-play fa-lg\"><span class=\"sr-only\">Play</span></span>\r\n    </div>\r\n    <span id=\"left\" >\r\n        <span class=\"fa-stack fa-lg\" tabindex=\"3\">\r\n        <span class=\"fa fa-square fa-stack-2x\" ></span>\r\n        <span class=\"fa fa-chevron-left fa-stack-1x\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n        </span>\r\n    </span>\r\n    <span id=\"right\" >\r\n        <span class=\"fa-stack fa-lg\" tabindex=\"4\">\r\n        <span class=\"fa fa-square fa-stack-2x\"></span>\r\n        <span class=\"fa fa-chevron-right fa-stack-1x\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n        </span>\r\n    </span>\r\n    </div>\r\n</div>\r\n";
},"useData":true});