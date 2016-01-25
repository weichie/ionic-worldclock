angular.module('bar.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    })
    .then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('BarCtrl', function($scope){
    $scope.clock,
    $scope.boa,
    $scope.cura,
    $scope.washington,
    $scope.mexico,
    $scope.sec;

    function tzHour(sub){
        var hour = new Date().getHours() + sub;

        if(hour < 10){
            hour = "0" + hour;
        }

        return hour;
    }

    var updateClock = function(){

        var sec = new Date().getSeconds();
        var min = new Date().getMinutes();

        if(sec < 10){sec = "0" + sec;}
        if(min < 10){min = "0" + min;}

        $scope.sec = sec;        

        $scope.clock        = tzHour(0) + ":" + min;
        $scope.boa          = tzHour(-2) + ":" + min;
        $scope.cura         = tzHour(-5) + ":" + min;
        $scope.washington   = tzHour(-6) + ":" + min;
        $scope.mexico       = tzHour(-7) + ":" + min;
    }

    setInterval(function(){
        $scope.$apply(updateClock);
    }, 500);
    updateClock();
})

.controller('historyCtrl', function($scope){
    $scope.countries = [
        {
            country:'Belgium',
            hour: '',
            pic: '../img/belgium.png'
        },
        {
            country:'Boa Vista',
            hour: '',
            pic: '../img/boavista.png'
        },
        {
            country:'Curaçao',
            hour: '',
            pic: '../img/curacao.png'
        },
        {
            country:'Washington',
            hour: '',
            pic: '../img/washington.png'
        },
        {
            country:'Mexico',
            hour: '',
            pic: '../img/mexico.png'
        }
    ];
})

.controller('browseCtrl', function($scope){
    $scope.overview = [
        {name: 'Afghanistan'},
        {name: 'Albania'},
        {name: 'Algeria'},
        {name: 'Australia'},
        {name: 'Austria'},
        {name: 'Belarus'},
        {name: 'Belgium'},
        {name: 'Boa Vista'},
        {name: 'Congo'},
        {name: 'Croatia'},
        {name: 'Curaçao'},
        {name: 'Denmark'},
        {name: 'Egypt'},
        {name: 'Finland'},
        {name: 'France'},
        {name: 'Greece'},
        {name: 'Hong Kong'},
        {name: 'Kenya'},
        {name: 'Malta'},
        {name: 'Mexico'},
        {name: 'Nepal'},
        {name: 'Niger'},
        {name: 'Poland'},
        {name: 'Portugal'},
        {name: 'Spain'},
        {name: 'Sweden'},
        {name: 'Switzerland'},
        {name: 'Turkey'},
        {name: 'Uganda'},
        {name: 'Viet Nam'},
        {name: 'Zimbabwe'}
    ];
});
