/**
 * Created by tobias on 20.09.15.
 */
var angularModule = angular.module('indexApp', []);

angularModule.controller('MainGridCtrl', function($scope, $http){
    $scope.loadProfiles = function(){
        $scope.loading = true;

        // Query people sorted by distance (TODO) from the server.
        $http({
            url: "/api/people",
            method: "GET",
            withCredentials: false,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function(response){
            console.log(response);
            $scope.users = response.data;
        }).catch(function(response){
            // Use mock data if the request is not successful.
            $scope.users = [
                { nickname: "test0", hobbies: ["glyphicon-book", "glyphicon-glass"], distance: 680, image_url: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { nickname: "test5", hobbies: ["glyphicon-glass"], distance: 200, image_url: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { nickname: "test1", hobbies: ["glyphicon-glass"], distance: 150, image_url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { nickname: "test0", hobbies: ["glyphicon-book", "glyphicon-glass"], distance: 680, image_url: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { nickname: "test5", hobbies: ["glyphicon-glass"], distance: 200, image_url: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { nickname: "test1", hobbies: ["glyphicon-glass"], distance: 150, image_url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { nickname: "test0", hobbies: ["glyphicon-book", "glyphicon-glass"], distance: 680, image_url: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { nickname: "test5", hobbies: ["glyphicon-glass"], distance: 200, image_url: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { nickname: "test1", hobbies: ["glyphicon-glass"], distance: 150, image_url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { nickname: "test0", hobbies: ["glyphicon-book", "glyphicon-glass"], distance: 680, image_url: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"},
                { nickname: "test5", hobbies: ["glyphicon-glass"], distance: 200, image_url: "http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg"},
                { nickname: "test1", hobbies: ["glyphicon-glass"], distance: 150, image_url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg"},
                { nickname: "test4", hobbies: ["glyphicon-flag", "glyphicon-glass"], distance: 800, image_url: "http://organicthemes.com/demo/profile/files/2012/12/profile_img.png"}
            ];
            console.log("Fehler beim Abrufen der Daten, verwende Mock-Daten.");
        }).finally(function(){
            $scope.loading = false;
        });
    };
    $scope.loadProfiles();
});
