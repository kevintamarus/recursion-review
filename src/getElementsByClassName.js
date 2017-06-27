// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
 // document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:

//input => class name(string)
//output => every element in the class name in an array ex.: []
     //ex: find className "prices" it will return => ["$259","$300", "$400"]
var getElementsByClassName = function(className) {
  var newArray = [];
  var element = document.body;
  checkElement(element);
  function checkElement(node) {
    if (node.classList.contains(className)) {
        newArray.push(node);
    }
    if (node.childNodes) {
      for(var i=0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType !== Node.TEXT_NODE) {
          checkElement(node.childNodes[i]);
        }
      }
    }
  }
  return newArray;
};
