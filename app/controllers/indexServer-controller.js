//mandamos la ejecución de las cookies de sesion necesarias
exports.render = function(req, res){
  if(req.session.lastVisit){
    console.log(req.session.lastVisit);
  }


  req.session.lastVisit = new Date();

//renderizamos la vista y las variables que utilizemos
  res.render('index.ejs',{
          title: 'GefCore',
          userFullName: req.user ? req.user.fullname: '',
          id: req.user ? req.user._id : '',
  });
};
