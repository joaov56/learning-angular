var application = angular.module('mainApp', []);

application.provider('date', function(){
    var greet;
    return{
        setGreeting: function(value){
            greet= value;
        },
        $get: function(){
            return{
                showDate: function(){
                    var date= new Date();
                    return greet + date.getHours();
                },
                devshowDate: function(){
                    var date= new Date();
                    return date.getHours();
                }
            }
        }
    }
})

application.config(function(dateProvider){
   let time= dateProvider.$get().devshowDate();
   console.log(time);
   
   if(time> 0 && time< 17){
       dateProvider.setGreeting('Good morning')
   }
})

application.controller('app', function($scope, date){
    $scope.greetMessage= date.showDate()
})