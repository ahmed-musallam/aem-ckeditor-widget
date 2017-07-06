
var JSONObject  = org.apache.sling.commons.json.JSONObject;
var AttrBuilder = com.adobe.granite.ui.components.AttrBuilder;
var I18n        = com.day.cq.i18n.I18n;
var Value       = com.adobe.granite.ui.components.Value;
use(function ()
{
  "use strict";
    var name = properties.name;
    name = name.replace("./", "");
    var componentValue = new Value(request, null);
    var value = componentValue.getContentValue(name);
    
    var attributes = {};
    var i18n = new I18n(request);

    function isTruthy(tocheck){
      return tocheck != null        &&
             tocheck != "undefined" &&
             tocheck != undefined;
    }
    function addAttr(attrName, override){
      if(isTruthy(override)){
        attributes[attrName] = override;
      }
      else{
        if(isTruthy(properties[attrName])){
          attributes[attrName] =  properties[attrName];
        }
      }
    }

    function addClass(className){
      if(!isTruthy(className)) return;
      var existingClass =  attributes["class"];
      if(existingClass) attributes["class"] = attributes["class"] +" " +className;
      else attributes["class"] = className;
    }

    addAttr("type", "text");
    addAttr("placeholder", i18n.getVar(properties.emptyText));
    addAttr("title", i18n.getVar(properties.title));

    if (properties.required) { addAttr("aria-required", true);}

    if(isTruthy(properties.disabled) && properties.disabled) addAttr("disabled", true);
    
    addClass(properties.get("class"));
    addClass("coral-Textfield");

    var attrs = ["id", "class", "rel", "name", "value"];
    for (var i = 0; i < attrs.length; i++) {
      var prop = attrs[i];
      addAttr(prop);
    }
  //----------------------------------------------------------------------- return
  return {
    "attributes": attributes,
    "value": value
  };
}); // use