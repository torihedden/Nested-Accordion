$(document).ready(function(){
  'use strict'

  $(".header").click(".header", function(){ //
    var lastClicked = $(".content-clicked");//jQuery returns an array based on the selector you give it.
                                            //even if that is an array with one element in it. even an empty array.
                                            //if you expect this to return a single element, you will be disappointed.
                                            //this is why we target the element at index 0. It will be the first (and only) element in the array, in this case.
    $(".content-clicked").removeClass("content-clicked");

    if (lastClicked[0] !== $(this).next()[0]){
      $($(this).next()).toggleClass("content-clicked");
    }
                                            //.toggle() by default will toggle display attributes of
                                            //the targeted element
                                            //but I need to keep toggling that CSS class to maintain the styling I applied to the text.
                                            //use .toggleClass instead
                                            
    $($(this).find("i")).toggleClass("arrow-down");
                                            //now only the arrow of the header you clicked on will rotate and change color. it reverses, too, on the next click.
                                            //when you click on this header, do any other "content" have class "content-clicked"?
                                            //IF so, remove that class, or set display to none
    });

  $(".sub-header").click(".sub-header", function(){
    $(".sub-showing").removeClass("sub-showing");
    $($(this).find(".sub-para")).addClass("sub-showing");

    $($(this).find("i")).toggleClass("arrow-down");

  });

});
