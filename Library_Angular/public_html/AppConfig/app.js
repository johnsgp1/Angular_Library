/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['angular',
    'angular_route',
    'bootstrap_ui_tpls',
    'xeditable',
//    'datatable',
//    'datatablebootstrap',
//    'datatblecol',
//    'datatabletools',
    'datatableresponsive',
    'logincontroller',
    'homecontroller',
    'asideCtrl',
    'productcontroller',
    'adminordercontroller',
]

        , function (Angular) {
            Angular.module('App', ['ui.router', 'App.logincontroller','App.homecontroller','App.asideCtrl','App.productcontroller','App.adminordercontroller'])
                    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
                            $urlRouterProvider.otherwise("/Login");
                            $stateProvider
                                    .state('Login', {
                                        url: '/Login',
                                        views: {
                                            '': {
                                                templateUrl: 'login.html',
                                                controller: 'logincontroller'
                                            },

                                        }
                                    })
                            .state('Home',{
                            url:'/Home',
                            views:{
                                '':{
                                   templateUrl:'templates/master/masterView.html' 
                                },
                                'header@Home':{
                                    templateUrl:'templates/assets/header.html'
                                },
                                'aside@Home':{
                                    templateUrl:'templates/assets/aside.html',
                                    //controller:'asideCtrl'
                                },
                                'footer@Home':{
                                    templateUrl:'templates/assets/footer.html'
                                },
                                'templateContainer@Home':{
                                    templateUrl:'templates/home/home.html',
                                    controller:'homecontroller',
                                    
                                    
                                }
                            }
                                    })
                                       .state('Product',{
                                         url:'/Product/:id',
                                        views:{
                                            '':{
                                                templateUrl:'templates/master/masterView.html'
                                            },
                                'header@Product':{
                                    templateUrl:'templates/assets/header.html'
                                },
                                'aside@Product':{
                                    templateUrl:'templates/assets/aside.html',
                                    //controller:'asideCtrl'
                                },
                                'footer@Product':{
                                    templateUrl:'templates/assets/footer.html'
                                },
                                'templateContainer@Product':{
                                    templateUrl:'templates/product/productView.html',
                                    controller:'productcontroller',
                                    
                                    
                                    
                                }
                                            
                                            
                                        }
                                    })
                                .state('Admin',{
                                                url:'/Admin',
                                        views:{
                                            '':{
                                                templateUrl:'templates/master/masterView.html'
                                            },
                                'header@Admin':{
                                    templateUrl:'templates/assets/header.html'
                                },
                                'aside@Admin':{
                                    templateUrl:'templates/assets/aside.html',
                                    //controller:'asideCtrl'
                                },
                                'footer@Admin':{
                                    templateUrl:'templates/assets/footer.html'
                                },
                                'templateContainer@Admin':{
                                    templateUrl:'templates/admin/order/orderView.html',
                                    controller:'adminordercontroller',
                                    
                                    
                                }
                                        }
                                    })
                        }])
        });