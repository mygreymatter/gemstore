(function () {
    var app = angular.module('Products', []);
    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-title.html'
        };
    });

    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: function ($scope) {
                $scope.tab = 1;
                $scope.selectTab = function (setTab) {
                    console.log("Set Tab: " + setTab);
                    $scope.tab = setTab;
                };

                $scope.isSelected = function (selectedTab) {
                    return $scope.tab === selectedTab;
                };
            }
        };
    });

    app.directive('productReviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review-form.html',
            controller: function ($scope) {
                $scope.review = {};
                $scope.addReview = function (product) {
                    product.retemplates.push($scope.review);
                    $scope.review = {};
                };
            }
        };
    });

})();
