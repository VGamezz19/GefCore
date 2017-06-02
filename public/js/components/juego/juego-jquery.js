$("#ngView").addClass("addMarginTopView");
$(".container-fluid").hide();

$(".izquierda").hide();

var cnt = 1;

function moverDerecha() {
  $(".izquierda").show();

  if (cnt === 5) {
    $(".derecha").hide();
    $(".juego5").hide();
    cnt = cnt + 1;

    $(".final5").show();
  } else if (cnt === 6){
      cnt = 6;
  }else{
    $(".juego" + cnt).hide();
    cnt = cnt + 1;

    $(".juego" + cnt).show();
  }

  document.getElementById('numeroPregunta').focus();
  $('[tabindex=2]').focus();
  $("#numeroPregunta").focus();

}

function moverIzquierda() {
  $(".final5").hide();
  $(".derecha").show();

  if (cnt === 1 || cnt === 0) {
    $(".izquierda").hide();
    $(".juego2").hide()

    $(".juego1").show();
  } else {
    $(".juego" + cnt).hide();
    cnt = cnt - 1;

    if (cnt === 1 || cnt === 0) {
      $(".izquierda").hide();
      $(".juego2").hide();

      $(".juego1").show();
    } else {
      $(".juego" + cnt).show();
      //console.log(cnt);
    }
  }
    document.getElementById('numeroPregunta').focus();
    $('[tabindex=2]').focus();
    $("#numeroPregunta").focus();
}

$( ".derecha" ).click(function() {
  moverDerecha();
});

$( ".izquierda" ).click(function() {
  moverIzquierda();
});

//============== Conados rapidos ======================

      cheet('←', function () {
        moverIzquierda();
      });

       cheet('→', function () {
        moverDerecha();
      });


//============= Comandos rapidos FIN ==================


setTimeout (function(){
  $(".inputEnter").keypress(function(e) {
  if(e.which == 13) {
      moverDerecha();

      document.getElementById('numeroPregunta').focus();
      $('[tabindex=2]').focus();
      $("#numeroPregunta").focus();
    }
  });


}, 2000)
