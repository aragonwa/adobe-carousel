this["JST"] = this["JST"] || {};

this["JST"]["src/templates/carousel-template.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <li class=\"slide"
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <img width=\"640\" height=\"480\" src=\""
    + alias3((helpers.formatSrcUrl || (depth0 && depth0.formatSrcUrl) || alias2).call(alias1,depth0,{"name":"formatSrcUrl","hash":{},"data":data}))
    + "\" />\n        <p class=\"slide-title\"><span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></p>\n        </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"carousel\" tabindex=\"1\">\n    <ul id=\"slides\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n    <div id=\"controls\">\n    <div id=\"start-stop\" tabindex=\"2\">\n        <span class=\"fa fa-pause fa-lg\" ><span class=\"sr-only\">Pause</span></span>\n        <span class=\"fa fa-play fa-lg\"><span class=\"sr-only\">Play</span></span>\n    </div>\n    <span id=\"left\" >\n        <span class=\"fa-stack fa-lg\" tabindex=\"3\">\n        <span class=\"fa fa-square fa-stack-2x\" ></span>\n        <span class=\"fa fa-chevron-left fa-stack-1x\"></span>\n        <span class=\"sr-only\">Previous</span>\n        </span>\n    </span>\n    <span id=\"right\" >\n        <span class=\"fa-stack fa-lg\" tabindex=\"4\">\n        <span class=\"fa fa-square fa-stack-2x\"></span>\n        <span class=\"fa fa-chevron-right fa-stack-1x\"></span>\n        <span class=\"sr-only\">Next</span>\n        </span>\n    </span>\n    </div>\n</div>\n";
},"useData":true});