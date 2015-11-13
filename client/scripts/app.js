var myApp = angular.module("myApp", []);

myApp.controller("LineupSet", ["$scope", "$http", function($scope, $http){
    $scope.teamArray = [];
    $scope.starterfilter = true;
    $scope.lineup = {
        offense: 0,
        defense: 0,
        total: '$scope.lineup.offense+scope.lineup.defense'
    };


    //$scope.teamLineup = {
    //    checked:['Sit']
    //};

    $scope.getPlayers = function(){
        $http.get('/data').then(function(response){
            $scope.teamArray = response.data;
            //$scope.starters = $filter()
            //console.log($scope.teamArray);
        });
    };

    $scope.togglePlayer = function(positionPlayer){
        //console.log(positionPlayer.starter);
        positionPlayer.starter = !positionPlayer.starter;
        //console.log(positionPlayer.starter);
    };
    $scope.checkLineup = function(){

      for(var i =0;i<$scope.teamArray.length; i++){

          //console.log($scope.teamArray[i]);
          $scope.player = $scope.teamArray[i];
          //console.log($scope.player);

          if($scope.player.starter==true){
              console.log("Gotcha!");
              $scope.lineup[$scope.player.position]++;
          }
          //check RB's
          //check
      }
        console.log($scope.lineup);
        return $scope.lineup;
    };

    $scope.getPlayers();
}]);