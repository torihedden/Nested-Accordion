
//don't do the accordion one piece at a time like this. manually opening and closing each piece one by one.

var arrowClicked = document.querySelector(".arrow");
var contentParagraph = document.querySelector(".content");

arrowClicked.addEventListener("click", function (){
  if (contentParagraph.className ===("content")){
    contentParagraph.className="content-clicked";
  } else if (contentParagraph.className===("content-clicked")){
    contentParagraph.className="content"}
});

//change icon color and orientation when you run mouse over the arrow.
//mouseenter
//mouseleave

var arrowClicked2 = document.querySelector(".arrow2");
var contentParagraph2 = document.querySelector(".content2");

arrowClicked2.addEventListener("click", function (){
  if (contentParagraph2.className ===("content2")){
    contentParagraph2.className="content-clicked2";
  } else if (contentParagraph2.className===("content-clicked2")){
    contentParagraph2.className="content2"}
});

var arrowClicked3 = document.querySelector(".arrow3");
var contentParagraph3 = document.querySelector(".content3");

arrowClicked3.addEventListener("click", function (){
  if (contentParagraph3.className ===("content3")){
    contentParagraph3.className="content-clicked3";
  } else if (contentParagraph3.className===("content-clicked3")){
    contentParagraph3.className="content3"}
});

// var arrowList = document.getElementsByClassName(".arrow");
// var contentList = document.getElementsByClassName(".content");
//
// for (i = 0; i < arrowList.length; i++){
//   arrowList.addEventListener("click", function (){
//     if (contentList[i].className ===("content")){
//       contentList[i].className = "content-clicked";
//     } else if (contentList[i].className ===("content-clicked")) {
//       contentList[i].className="content"}
//   })
// };
