
define(['angular'],function(Angular){
    Angular.module('App.asideCtrl',[])
            .controller('asideCtrl',function($scope){
                $scope.toggle=function(){
                    $.root_.hasClass("menu-on-top") || ($.root_.toggleClass("minified"), $.root_.removeClass("hidden-menu"), $("html").removeClass("hidden-menu-mobile-lock"), a.effect("highlight", {}, 500))
                }
            });
});

