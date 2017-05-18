
//Cuando hace click en Entrar del menu
  $('.login').click(function(){
    $('.loginModal').modal('show');
  //  setTimeout(focus, 300);
  });
//End Login Modal jquery

//Start Register Modal jquery
$('.register').click(function(){
  $('.registerModal').modal('show');
  //setTimeout(focusRegister, 300);
});

//End Register Modal jquery

$('.logeOut').click(function(){
  $('.checkModal').modal('show');
  //setTimeout(focusLogOut, 300);
});

//Functions Modal Focus
  function focus () {
    $('#username').focus();
  }
  function focusRegister () {
    $('#firstName').focus();
  }

  function focusLogOut () {
    $('.close-loged').focus();
  }
