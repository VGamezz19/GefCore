
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
          //registerLogin
$('.registerLogin').click(function(){
  $('.loginModal').modal('hide');
  $('.registerModal').modal('show');
  setTimeout(focusRegister, 300);
});
//End Register Modal jquery

$('.logeOut').click(function(){
  $('.checkModal').modal('show');
});
//Functions Modal Focus
  function focus () {
    $('#username').focus();
  }
  function focusRegister () {
    $('#firstName').focus();
  }

  $('.logeOut').click(function(){
    $('.checkModal').modal('show');
  });
