
var arrowClicked = document.querySelector(".arrow");
var contentParagraph = document.querySelector(".content");

arrowClicked.addEventListener("click", function () {
  contentParagraph.className="content-clicked";
});
