
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

    $( ".profileHome" ).on( "focus", function(  ) {
      console.log("Hola");
    });
    $( ".profileHome").trigger( "focus");


  },300);
