/* jshint undef: true, unused: true */
/* globals use, com*/

var Value = com.adobe.granite.ui.components.Value;
use(function ()
{
  "use strict";

  /**
   * Check if the objetct is not null or undefined or the string "undefined"
   * @param {*} tocheck object to check
   */
  function isTruthy(tocheck){
    // intentional use of unstrict comparison
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
    // remove "./"
    name = name.replace("./", "");
    var componentValue = new Value(request, null);
    return componentValue.getContentValue(name);
  }

  /**
   * Attribute builder prototype. maintains a key/val map of html attributes.
   * @param {*} attrNames 
   * @param {*} properties 
   */
  function AttrBuilder(attrNames, properties){
    // the attributes map
    this.attributes = {};
    // reference to this AttrBuilder instance
    var self = this;

    /**
     * adds an attribute to the list of attributes
     * @param {*} attrName the name of attribute to be added
     * @param {*} override the value override to be used, null to get from properties 
     */
    this.addAttr = function (attrName, override){
      if(!isTruthy(attrName)){ return;}
      // if override is truthy, use it.
      if(isTruthy(override)){ self.attributes[attrName] = override; }
      //if no override, get value from properties
      else{
        var propVal = properties[attrName];
        if(isTruthy(propVal)){ self.attributes[attrName] =  propVal;}
      }
      return;
    };
    /**
     * add a class to existing class attribute
     * @param {*} className the class to be added.
     */
     this.addClass = function(className){
      if(!isTruthy(className)) return;
      var existingClass =  self.attributes["class"];
      // if class attrib exixts, append to it.
      if(isTruthy(existingClass)) self.attributes["class"] = existingClass + " " + className;
      // if class attrib does not exixt, add it.
      else self.attributes["class"] = className;
      return;
    };

    // add all attributes from map
    for (var i = 0; i < attrNames.length; i++) {
      var attr = attrNames[i];
      this.addAttr(attr);
    }

  }
  // expose public methods/variables
  return {
    "isTruthy": isTruthy,
    "getValue": getValue,
    "AttrBuilder": AttrBuilder
  };
}); // use