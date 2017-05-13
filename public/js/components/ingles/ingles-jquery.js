
  $(".spanFlotando").hide();

  setTimeout(function(){
    $(".matematicasHome").hover(function () {
      $(this).find(".spanFlotando").show();
    });
    //quitando hover raton
    $(".matematicasHome").mouseleave(function () {
      $(this).find(".spanFlotando").hide();
    });

  },200)
