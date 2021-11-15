function removeEl(_input) {
  var target = document.querySelectorAll(_input);
  for (var i = 0; i < target.length; i++) {
    target[i].remove()
  }
}


// 语言设定
function lang() {
  var target = document.querySelector("#artInfo");

  if (target != null) {
    var targetAtt = target.getAttribute("lang");
    document.querySelector("html").setAttribute("lang", targetAtt)
  }
}
lang()
removeEl("#artInfo");

// 如果文档语言为中文，则使用中文样式，通过加入 `.cn`
function f(_input) {
  var targetEl = document.querySelector("html");
  var targetAtt = targetEl.getAttribute("lang");
  var bool = targetAtt == _input;
  if (bool) {
    var el = document.querySelector("body");
    el.classList.add("zh");
  }

}
f("zh");


// 在 Typora 编辑文档时，我们经常容易出现空白的段落，通过这个方法删除它们
function deleteEmptyParagraph() {
  var search = document.querySelectorAll("p");

  for (var i = 0; i < search.length; i++) {
    if (search[i].innerHTML == "&nbsp;") {
      console.log(i);
      search[i].remove();
    }
  }
}
deleteEmptyParagraph()

// 在这一步中，我将所有 Typora 中的内容逐个移动到了同一个容器中
function stockContent() {
  var items = document.querySelectorAll("body > *:not(#initializer)");

  console.log(items[0]);

  var newContainer = document.createElement("article");
  newContainer.id = "mainArticle";

  appendLocation = document.querySelector("body");
  appendLocation.appendChild(newContainer);

  for (var i = 0; i < items.length; i++) {
    newContainer.appendChild(items[i]);
  }
}
stockContent();


// 给 newTheorem 加上 index
function theoremIndex(_input) {
  var targets = document.querySelectorAll("#mainArticle h4");

  var index = 0;
  for (var i = 0; i < targets.length; i++) {
    var bool = targets[i].innerHTML == _input;
    if (bool) {
      var targetNext = targets[i].nextElementSibling.querySelector("blockquote p");

      index += 1;
      targets[i].innerHTML += " " + index;
      targets[i].id = _input + "\-" + index;

      if (targetNext != null) {
        targets[i].innerHTML += " \(" + targetNext.innerHTML +")";

        targetNext.remove();
      }

      targets[i].innerHTML += ".";
    }
  }
}
theoremIndex("Definition");
theoremIndex("Lemma");


// 在编辑 Typora 文档时，在 figure 后面直接使用 blockquote，在下列方法的编译下，blockquote 会变成 figure 中的 figcaption
function enchantFig() {
  var targets = document.querySelectorAll("figure");

  for (var i = 0; i < targets.length; i++) {

    var cap = targets[i].nextElementSibling;

    if (cap != null) {
      var newCap = document.createElement("figcaption");
      targets[i].appendChild(newCap);
      newCap.innerHTML = cap.innerHTML;
      cap.remove();
    }
  }
}
enchantFig();


function findProof() {
  var targets = document.querySelectorAll("strong");

  for (var i = 0; i < targets.length; i++) {
    if (targets[i].innerHTML == "Proof.") {
      targets[i].classList.add("proofBegin");
      targets[i].parentNode.classList.add("proofBegin");
    }
  }
}
findProof();


// 所有操作结束后删除 `.remainAtInitial`
document.querySelector("#initializer").remove();

























//
