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
               console.log($scope.matematicas);

           }, function errorCallback(response) {

           });

           console.log($scope.thisUser.puntuacion);
           this.puntuacionMaxima = $scope.thisUser.puntuacion.matematicas;

       }
})


}]);
