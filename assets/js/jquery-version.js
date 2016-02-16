$(document).ready(function(){
  'use strict'

  $(".header").click(".content", function(){
    // $(".content").toggleClass("content-clicked");
    $(".content").toggle().addClass("content-clicked").removeClass("contnet");

  });

});
