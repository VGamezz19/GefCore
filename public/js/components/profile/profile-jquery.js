
  $(".spanFlotandoProfile").hide();
  $(".container-fluid").hide();
  console.log("Estoy dentro");
  setTimeout(function(){
    $(".profileHome").hover(function () {
      $(this).find(".spanFlotandoProfile").show();
    });
    //quitando hover raton
    $(".profileHome").mouseleave(function () {
      $(this).find(".spanFlotandoProfile").hide();
    });


//Work
    $('[tabindex=1]').on('focus', function() {
          console.log("hola");
     });


  },300);
