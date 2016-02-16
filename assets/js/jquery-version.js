$(document).ready(function(){
  'use strict'

  $(".header").click(".content", function(){
    // $(".content").toggleClass("content-clicked");
    $(".content").toggle().addClass("content-clicked");//.removeClass("contnet");//this class name is a typo but the accordion works. investigate later.
    //now i just removed that .removeClass and it still works. weird.
  });

  

});
