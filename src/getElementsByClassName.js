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
  
  var returnArray = [];
//Search main node for elements with className
//iterate over child nodes, check their class attributes
  //If there elements with the same classname attribute, push to an array.
  for(var i = 0; i < document.body.classList.length; i++) {
    if (document.body.classList[i] === className) {
      returnArray.push(1);
    }
  }
  return returnArray;
};
