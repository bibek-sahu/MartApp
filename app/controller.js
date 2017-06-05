module.controller("MainController", function ($scope, $router) {
    $scope.title = "This is demo of application";
    $router.config([
        {
            path: "/",
            redirectTo: "/home"
        },
        {
            path: "/home",
            component: {
                navigation: "navigation",
                main: "home",
                footer: "footer"
            },
            as: "home"
        },
        {
            path: "/profile",
            component: {
                navigation: "navigation",
                main: "profile",
                footer: "footer"
            },
            as: "profile"
        },
        {
            path: "/about",
            component: {
                navigation: "navigation",
                main: "about",
                footer: "footer"
            },
            as: "about"
        }
    ]);
});

module.controller('HomeController', function($scope, $location) {
    var title = "MART";
    
    $scope.user = {categoryName: ''};
    
    $scope.categories = [
        {
            'id': 1, 
            'label': 'Accomodation',
            'subs': ['Sharing', 'Rent', 'Buy', 'Sell']
        },
        {
            'id': 2,
            'label': 'Car Pooloing',
            'subs': ['Start New Pool', 'Join Pool']
        },
        {
            'id': 3,
            'label': 'Miscellaneous',
            'subs': ['Electronics', 'Consumerable']
        },
        {
            'id': 3,
            'label': 'Vehicle',
            'subs': ['Rent', 'Buy', 'Sell']
        }
    ]
    
    $scope.search = function () {
        alert("button clicked");
        $location.url('/results');
    };
});