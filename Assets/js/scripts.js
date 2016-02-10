
var arrowClicked = document.querySelector(".arrow");
var contentParagraph = document.querySelector(".content");

//this was working i just commented it out
// arrowClicked.addEventListener("click", function () {
//   contentParagraph.className="content-clicked";
// });

var arrowHover = document.querySelector(".arrow");

// arrowHover.addEventListener("hover", function () {
//   arrowHover
// });

// var classList = document.GETALLTHECLASSNAMES
//
// document.getElementsByClassName("content").classList.toggle("content-clicked");

arrowClicked.addEventListener("click", function (){
  if (contentParagraph.className ===("content")){
    contentParagraph.className="content-clicked";
  } else if (contentParagraph.className===("content-clicked")){
    contentParagraph.className="content"}
});
