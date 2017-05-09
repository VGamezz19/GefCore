$("#ngView").addClass("addMarginTopView");
$(".container-fluid").hide();

setTimeout(function(){
$(".pregunta").hide();
$(".izquierda").hide();
$(".juego1").show();

var cnt = 1;

function moverDerecha() {
  $(".izquierda").show();
  if (cnt === 5) {
    $(".derecha").hide();
    $(".juego5").hide();
    ///////////////////
    $(".final5").show();
  } else {
    $(".juego" + cnt).hide();
    console.log($("juego" + cnt).hide());
    //////////////////////////
    cnt = cnt + 1;
    $(".juego" + cnt).show();
    console.log(cnt);
  }
}

$( ".derecha" ).click(function() {
  moverDerecha();
  $("#numeroPregunta").focus();
});

$( ".izquierda" ).click(function() {
  $(".final5").hide();
  $(".derecha").show();
  if (cnt === 1) {
    $(".izquierda").hide();
    $(".juego2").hide()
    ///////////////////
    $(".juego1").show();
  } else {
    $(".juego" + cnt).hide();
    //////////////////////////
    cnt = cnt - 1;
    $(".juego" + cnt).show();
    console.log(cnt);
  }

});

$(".inputEnter").keypress(function(e) {
if(e.which == 13) {
    moverDerecha();

    $(".inputEnter").focus();
  }
});

},50)
