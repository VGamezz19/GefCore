
//Cuando hace click en Entrar del menu
  $('.login').click(function(){
    $('.loginModal').modal('show');
    setTimeout(focus, 300);
  });
//End Login Modal jquery

//Start Register Modal jquery
$('.register').click(function(){
  $('.registerModal').modal('show');
  setTimeout(focusRegister, 300);
});

//End Register Modal jquery

$('.logeOut').click(function(){
  $('.checkModal').modal('show');
  setTimeout(focusLogOut, 300);
});

//Functions Modal Focus
  function focus () {
    document.getElementById('loginModal').focus();
    $('[tabindex=2]').focus();
    $("#loginModal").focus();
  }
  function focusRegister () {
    document.getElementById('registerModal').focus();
    $('[tabindex=4]').focus();
    $("#registerModal").focus();
  }

  function focusLogOut () {
    document.getElementById('check').focus();
    $('[tabindex=6]').focus();
    $("#check").focus();
  }
