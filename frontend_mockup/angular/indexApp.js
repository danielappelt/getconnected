/**
 * Created by tobias on 20.09.15.
 */
var angularModule = angular.module('indexApp', []);

angularModule.controller('MainGridCtrl', function($scope, $http){
    $scope.loadProfiles = function(){
        $scope.loading = true;

        // currently defaults to mock
        $http({
            url: "none",
            method: "GET",
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function(response){
            console.log(response);
            $scope.users = response;
        }).catch(function(response){
            //wenn kein Service da ist, mock daten setzen
            $scope.users = [
                { name: "test0", preferences: ["glyphicon-book", "glyphicon-glass"], distance: 680, img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { name: "test5", preferences: ["glyphicon-glass"], distance: 200, img: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { name: "test1", preferences: ["glyphicon-glass"], distance: 150, img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { name: "test0", preferences: ["glyphicon-book", "glyphicon-glass"], distance: 680, img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { name: "test5", preferences: ["glyphicon-glass"], distance: 200, img: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { name: "test1", preferences: ["glyphicon-glass"], distance: 150, img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { name: "test0", preferences: ["glyphicon-book", "glyphicon-glass"], distance: 680, img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { name: "test5", preferences: ["glyphicon-glass"], distance: 200, img: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { name: "test1", preferences: ["glyphicon-glass"], distance: 150, img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { name: "test0", preferences: ["glyphicon-book", "glyphicon-glass"], distance: 680, img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { name: "test5", preferences: ["glyphicon-glass"], distance: 200, img: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { name: "test1", preferences: ["glyphicon-glass"], distance: 150, img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { name: "test4", preferences: ["glyphicon-flag", "glyphicon-glass"], distance: 800, img: "http://organicthemes.com/demo/profile/files/2012/12/profile_img.png"}
            ];
            console.log("Fehler beim Abrufen der Daten, verwende Mock-Daten.");
        }).finally(function(){
            $scope.loading = false;
        });
    };
    $scope.loadProfiles();
});