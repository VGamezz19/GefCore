$("#ngView").addClass("addMarginTopView");
$(".container-fluid").hide();

$(".izquierda").hide();
setTimeout(function(){

  $(".juego1").show();
},100);

var cnt = 1;

function moverDerecha() {
  $(".izquierda").show();


  if (cnt === 5) {
    $(".derecha").hide();
    $(".juego5").hide();
    ///////////////////
    cnt = cnt + 1;
    $(".final5").show();
  } else {
    $(".juego" + cnt).hide();
    //////////////////////////
    cnt = cnt + 1;
    console.log(cnt);
    $(".juego" + cnt).show();
  }
}

$( ".derecha" ).click(function() {
  moverDerecha();
  $("#numeroPregunta").focus();
});

$( ".izquierda" ).click(function() {
  $(".final5").hide();
  $(".derecha").show();


  if (cnt === 1 || cnt === 0) {
    $(".izquierda").hide();
    $(".juego2").hide()
    ///////////////////
    cnt = 0;
    $(".juego1").show();
  } else {
    $(".juego" + cnt).hide();
    //////////////////////////
    cnt = cnt - 1;
    if (cnt === 1 || cnt === 0) {
      $(".izquierda").hide();
      $(".juego2").hide()
      ///////////////////
      cnt = 0;
      $(".juego1").show();
    } else {
      $(".juego" + cnt).show();
      console.log(cnt);
    }

  }

});
setTimeout (function(){
  $(".inputEnter").keypress(function(e) {
  if(e.which == 13) {
      moverDerecha();

      $(".inputEnter").focus();
    }
  });


}, 2000)
