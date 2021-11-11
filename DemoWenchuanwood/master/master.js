var allDef = document.querySelectorAll("#write h4 a[id*='def_']");

console.log(allDef);

for (var i = 0; i < allDef.length; i++) {
  var defName = allDef[i].getAttribute("name");

  if (defName == null) {
    defName = "";
  }

  allDef[i].innerHTML =
    "<span class='index'>" +
    "Definition" + " " + (i + 1) +
    "</span>" +
    "<span class='name'>" + ": " +
    defName +
    "</span>"
}


var allRef = document.querySelectorAll("#write a.ref");

for (var i = 0; i < allRef.length; i++) {
  var theHref = allRef[i].getAttribute("href");

  var theRefObj = document.querySelector(theHref);

  allRef[i].innerHTML = theRefObj.querySelector("span.index").innerHTML;
}

var test = window.location.href;

console.log(test);
