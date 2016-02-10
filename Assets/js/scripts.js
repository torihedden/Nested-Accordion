
var arrowChange = document.querySelector(".arrow");

arrowChange.addEventListener("mouseover", function () {
  arrowChange.style.color="red";
  }
);

// arrowChange.addEventListener("click", function () {
//   alert("you clicked the arrow!");
//   }
// );

// var paragraphContent = document.querySelector(".content");
//
// paragraphContent.addEventListener("ACTION HERE", function () {
//   //what do you want the paragraphContent to do?
//   }
// );

var paragraphContent = document.querySelector(".content");

arrowChange.addEventListener("click", function () {
  paragraphContent.className.replace = "content-clicked";
});
