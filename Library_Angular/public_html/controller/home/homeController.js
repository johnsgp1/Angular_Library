define(['angular'], function (Angular) {
    Angular.module('App.homecontroller', [])
            .controller('homecontroller', ['$scope', '$http', '$state', '$q','$compile','$rootScope','$window', function ($scope, $http, $state, $q,$compile,$rootScope,$window) {
                   
                    $scope.getBooks = function () {
                        var deff = $q.defer();
                        $http.get('data/books.json')
                                .success(function (data) {
                                    //alert(data);
                            $scope.booksData=data
                            //$scope.renderBooks();
                                    //angular.extend(_this, data);
                                    deff.resolve();
                                    $scope.renderBooks() ;
//                                    angular.forEach($scope.booksData,function(key,value){
//                                      $scope.renderBooks(key) ;
//                                    })
                                })
                                .error(function () {
                                    deff.reject('could not find someFile.json');
                                });
                    },
                    $scope.renderBooks = function () {
                        angular.forEach($scope.booksData,function(value,key){
                                      
                       $('#contentContainer').append('<div class="col-sm-6 col-lg-4" > <div class="panel panel-default"><div class="panel-body status"><div class="who clearfix"><h1 class="center-block"><b>'+value.bName+'</b></h1></div><div id="tabs" class="tab-pane"><ul><li><a href="#tabs-a">Description</a></li><li><a href="#tabs-b">Comments</a></li><li><a href="#tabs-c">Owner</a></li></ul><div id="tabs-a"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div id="tabs-b"><p>Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</p></div><div id="tabs-c"><p>Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</p></div></div><div class="product-content product-wrap clearfix"><div class="row"><div class="col-md-5 col-sm-12 col-xs-12"><div class="product-image"> <img src='+value.bImage+' alt="194x228" class="img-responsive"> <span class="tag2 sale">Sale</span> </div></div><div class="col-md-7 col-sm-12 col-xs-12"><div class="product-deatil"><h5 class="name"><a href="javascript:void(0)" ng-click="getProduct('+value.bId+')" id='+value.bId+'>'+value.bName+'<span>'+value.bCategory+'</span></a></h5><p class="price-container"><span>$'+value.bPrice+'</span></p><span class="tag1"></span> </div><div class="description"><p>Proin in ullamcorper lorem. Maecenas eu ipsum </p></div></div></div></div><div class="image" hidden=""><img src='+value.bImage+' alt="img"></div><ul class="links"><li><a href="javascript:void(0);"><i class="fa fa-heart-o"></i> Wishlist</a></li><li><a href="javascript:void(0);"><i class="fa fa-shopping-cart"></i> Add To Cart</a></li><li><a href="javascript:void(0);"><i class="fa fa-share-square-o"></i> Buy</a></li></ul><ul class="comments"><li><img src="img/avatars/sunny.png" alt="img" class="online"><span class="name">John Doe</span>Looks like a nice house, when did you get it? Are we having the party there next week? ;)</li><li><img src="img/avatars/2.png" alt="img" class="online"><span class="name">Alice Wonder</span>Seems cool. </li><li><img src="img/avatars/sunny.png" alt="img" class="online"><input type="text" class="form-control" placeholder="Post your comment..."></li></ul> </div></div></div></div>');
                       //$('#blink').fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
                   // $scope.renderBooks(key) ;
                   //$('#tabs').tabs();
                    $compile('#'+value.bId)($scope);
                    $('.tab-pane').tabs();                })
                        }
                        
                    $scope.getBooks();
                    $scope.getProduct = function(id){
                        alert(id);
                        $rootScope.selecterid=id;
                       // $state.go('Product');
                        $window.location="index.html#/Product/"+id
                    }


                }]);
});
