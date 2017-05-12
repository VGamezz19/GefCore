
  $(".spanFlotando").hide();
  $(".container-fluid").hide();
  console.log("Estoy dentro");
  setTimeout(function(){
    $(".matematicasHome").hover(function () {
      $(this).find(".spanFlotando").show();
    });
    //quitando hover raton
    $(".matematicasHome").mouseleave(function () {
      $(this).find(".spanFlotando").hide();
    });

  },300);
