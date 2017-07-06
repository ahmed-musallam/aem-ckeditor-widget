/* jshint undef: true, unused: true */
/* globals use, com, request, properties*/

var I18n        = com.day.cq.i18n.I18n;
use(["util.js"], function (util)
{
  "use strict";
  // new i18n provider
  var i18n = new I18n(request);

  // get the content value
  var value = util.getValue(request, properties);

  // add attribute names from properties
  var attrNames = ["id", "rel", "name", "value", "fieldDescription", "fieldLabel"];
  var attrs = new util.AttrBuilder(attrNames, properties);
  var otherAttr = new util.AttrBuilder(["fieldDescription", "fieldLabel"], properties);
  
  // add other attributes
  attrs.addAttr("type", "text");
  attrs.addAttr("placeholder", i18n.getVar(properties.placeholder));
  attrs.addAttr("title", i18n.getVar(properties.title));

  // add required attribute
  if (properties.required) { attrs.addAttr("aria-required", true);}
  // add disabled attribute
  if(util.isTruthy(properties.disabled)) attrs.addAttr("disabled", true);
  
  // the "class" property is special in java, we have to use the get method
  attrs.addClass(properties.get("class"));
  
  return {
    "attributes": attrs.attributes,
    "otherAttrs": otherAttr.attributes,
    "value": value
  };
}); // use