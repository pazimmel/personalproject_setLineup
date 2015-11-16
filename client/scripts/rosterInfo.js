myApp.directive('rosterInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "/assets/views/rosterInfo.html"
        }
    }
);