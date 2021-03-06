  angular.module('matematicas').controller('matematicasController',['$scope', '$rootScope','$http', '$location', 'UserCurrent',function ($scope, $rootScope, $http, $location, UserCurrent) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();

UserCurrent.getUser()
   .then( function(user) {
     $scope.thisUser = user


       //==============================================================================
       if (!$scope.thisUser) {
         $location.path( "/" );
       } else {

         $http({
           method: 'GET',
           url: '/getAllMates'
         }).then(function successCallback(response) {

               $scope.matematicas = response.data;

               setTimeout(function(){
                 $(".matematicasHome").hover(function () {
                   $(this).find(".spanFlotando").show();
                 });
                 //quitando hover raton
                 $(".matematicasHome").mouseleave(function () {
                   $(this).find(".spanFlotando").hide();
                 });

               },200)

           }, function errorCallback(response) {

           });

           this.puntuacionMaxima = $scope.thisUser.puntuacion.matematicas;

       }
})


}]);
