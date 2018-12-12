/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require.config({
    urlArgs:"bust=v1.0.2",
    paths:{
        angular:'lib/Angular/angular.min',
        angular_route:'lib/Angular/angular-ui-router.min',
        angular_material:'lib/Angular/angular-material-min.js',
        xeditable:'lib/Angular/xeditable.min',
        bootstrap_ui:'lib/Angular/ui-bootstrap-2.2.0.min',
        bootstrap_ui_tpls:'lib/Angular/ui-bootstrap-tpls-2.2.0.min', 
       // datatable:'lib/datatables/jquery.dataTables.min',
//        datatablebootstrap:'lib/datatables/dataTables.bootstrap.min',
//        datatblecol:'lib/datatables/dataTables.colVis.min',
//        datatabletools:'lib/datatables/dataTables.tableTools.min',
        datatableresponsive:'lib/datatable-responsive/datatables.responsive.min',
        app:'AppConfig/app' ,
        logincontroller:'controller/login/loginController',
        homecontroller:'controller/home/homeController',
        asideCtrl:'controller/assets/asideController',
        productcontroller:'controller/product/productController',
        adminordercontroller:'controller/admin/order/orderContrller'
    },
    shim:{
      'angular': {
          exports: 'angular'
        },
        angular_route:{
          deps:['angular'] 
        },
        'xeditable': {
          exports: 'angular'
        }  
    } ,       
});
//var global={
//    
//};
define(['angular','app'],function (Angular) {
    
    'use strict';
    
    return Angular.bootstrap(document, ['App']);
});