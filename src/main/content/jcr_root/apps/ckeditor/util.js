/* jshint undef: true, unused: true */
/* globals use, com*/

var Value = com.adobe.granite.ui.components.Value;
use(function ()
{
  "use strict";

  /**
   * Check if the objetct is not null or undefined or the string "undefined"
   * @param {*} tocheck 
   */
  function isTruthy(tocheck){
    return tocheck != null        &&
           tocheck != "undefined" &&
           tocheck != undefined   &&
           tocheck;
  }

  /**
  * Get the value of the granite widget
  * @param request the slingHttpRequest
  * @param properties the properties map containing the "name"
  */
  function getValue(request, properties){
    var name = properties.name;
    if(!isTruthy(name)) return null;
    // remove the "./"
    name = name.replace("./", "");
    var componentValue = new Value(request, null);
    return componentValue.getContentValue(name);
  }

  function AttrBuilder(attrNames, properties){
    this.attributes = {};
    var self = this;
    /**
     * adds an attribute to the list of attributes
     */
    this.addAttr = function (attrName, override){
      if(!isTruthy(attrName)){ return;}
      if(isTruthy(override)){ self.attributes[attrName] = override; }
      else{
        var propVal = properties[attrName];
        if(isTruthy(propVal)){ self.attributes[attrName] =  propVal;}
      }
      return;
    };
    /**
     * add a class to existing class attribute
     * @param {*} className 
     */
     this.addClass = function(className){
      if(!isTruthy(className)) return;
      var existingClass =  self.attributes["class"];
      if(isTruthy(existingClass)) self.attributes["class"] = existingClass + " " + className;
      else self.attributes["class"] = className;
      return;
    };

    // add all attributes from map
    for (var i = 0; i < attrNames.length; i++) {
      var attr = attrNames[i];
      this.addAttr(attr);
    }

  }
  //----------------------------------------------------------------------- return
  return {
    "isTruthy": isTruthy,
    "getValue": getValue,
    "AttrBuilder": AttrBuilder
  };
}); // use