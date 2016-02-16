$(document).ready(function(){
  'use strict'

  $(".header").click(".header", function(){
    // $(".content").toggleClass("content-clicked");
    $(".content").toggle().addClass("content-clicked");//.removeClass("contnet");//this class name is a typo but the accordion works. investigate later.
    //now i just removed that .removeClass and it still works. weird.
    //.toggle() by default will toggle display attributes of the targeted element.
    //but I need to keep toggling that CSS class to maintain the styling I applied to the text
    console.log(this.children);
    $("i").toggle().addClass("arrow-down");
  });

});
