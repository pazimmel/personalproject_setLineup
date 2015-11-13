var myApp = angular.module("myApp", []);

myApp.controller("LineupSet", ["$scope", "$http", function($scope, $http){
    $scope.teamArray = [];
    //$scope.teamLineup = {
    //    checked:['Sit']
    //};

    $scope.getPlayers = function(){
        $http.get('/data').then(function(response){
            $scope.teamArray = response.data;
            //$scope.starters = $filter()
            console.log($scope.teamArray);
        });
    };

    $scope.togglePlayer = function(positionPlayer){
        //console.log(positionPlayer.starter);
        positionPlayer.starter = !positionPlayer.starter;
        //console.log(positionPlayer.starter);
    };
    $scope.getPlayers();
}]);