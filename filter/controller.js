var app= angular.module('mainApp', [])

app.controller('people', function($scope, $http){
    $http({
        method: 'GET',
        url: 'http://127.0.0.1:5500/database.json'
    }).then(function(response){
        $scope.persons= response.data.records
    }).catch(function(err){
        console.log(err);
    })

})