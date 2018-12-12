/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['angular'],function(Angular){
 Angular.module('App.logincontroller',[])
         .controller('logincontroller',['$scope','$http','$state','$filter','$window',function($scope,$http,$state,$filter,$window){
                   $scope.isError=false;   
                   $scope.userName="admin";
                   $scope.password="admin"
           //alert($scope.test)
           $scope.LoginUser=function(){
               
               if($scope.passwordModel=="user" && $scope.usernameModel=="user"){
                   alert("Sucess");
                   //$window.location="index.html#/ $state.go('error');"
                    $state.go('Home');
               }else if($scope.passwordModel=="admin" && $scope.usernameModel=="admin"){
                    $state.go('Admin'); 
               }
               else{
                  $scope.isError=true; 
                  $scope.error="Invalid"
               }
           }
 }]);
});
