let app= angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        resolve: {
            "check": function($rootScope, $location){
                if($rootScope.logedIn){
                    $location.path('/dashboard')
                }
            }
        },
        templateUrl: 'login.html'
    })
    .when('/dashboard', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.logedIn){
                    $location.path('/')
                }
            }
        },
        templateUrl: 'page.html'


    })
    .otherwise({
        redirectTo: '/'
    })
})

app.controller('loginCtrl', function($scope, $location, $rootScope){
    $scope.submit= function(){
        
        if($scope.username == 'admin' && $scope.password== 'admin'){
            $rootScope.logedIn= true
            $location.path('/dashboard')
        }else {
            alert('Failed to login')
        }
    }
})