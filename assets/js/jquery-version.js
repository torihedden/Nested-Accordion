$(document).ready(function(){
  'use strict'

  $(".header").click(".header", function(){

    $($(this).next()).toggle().addClass("content-clicked");//.removeClass("contnet");//this class name is a typo but the accordion works. investigate later.
    //now i just removed that .removeClass and it still works. weird.
    //.toggle() by default will toggle display attributes of the targeted element.
    //but I need to keep toggling that CSS class to maintain the styling I applied to the text
    $($(this).find("i")).toggleClass("arrow-down");
    //now only the arrow of the header you clicked on will rotate and change color. it reverses, too, on the next click.
    });

    $(".sub-header").click(".sub-header", function(){
    $($(this).find(".sub-para")).toggle().addClass("sub-showing");

    $($(this).find("i")).toggleClass("arrow-down");

  });

});
