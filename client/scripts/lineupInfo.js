myApp.directive('lineupInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "/assets/views/lineupInfo.html"
        }
    }
);