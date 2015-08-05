(function () {
    var app = angular.module('Store', ['Products']);
    app.controller('StoreController', function ($scope) {
        $scope.products = gems;
        $scope.title = "Gemstore";
    });



    var gems = [{
            name: 'Spinel',
            price: 2.95,
            description: 'Shines bright and splendid',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: '../images/spinel-full.jpg',
                thumb: '../images/spinel-thumb.jpg'
        }],
            reviews: [{
                stars: 5,
                body: "I love this Gem!",
                author: "mygreymatter@gmail.com"
            }, {
                stars: 3,
                body: "Its good",
                author: "ironman@gmail.com"
            }]
    }, {
            name: 'Silica',
            price: 11.05,
            description: 'Shines bright and splendid',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: '../images/silica-full.jpg',
                thumb: '../images/silica-thumb.jpg'
        }],
            reviews: [{
                stars: 5,
                body: "I love this Gem!",
                author: "mygreymatter@gmail.com"
            }, {
                stars: 3,
                body: "Its good",
                author: "ironman@gmail.com"
            }]
    }, {
            name: 'Blue Octal',
            price: 11.05,
            description: 'Shines bright and splendid',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: '../images/blue-octal-full.jpg',
                thumb: '../images/blue-octal-thumb.jpg'
        }],
            reviews: [{
                stars: 5,
                body: "I love this Gem!",
                author: "mygreymatter@gmail.com"
            }, {
                stars: 3,
                body: "Its good",
                author: "ironman@gmail.com"
            }]
    }, {
            name: 'Olive Cubic',
            price: 11.05,
            description: 'Shines bright and splendid',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: '../images/olive-cubic-full.jpg',
                thumb: '../images/olive-cubic-thumb.jpg'
        }],
            reviews: [{
                stars: 5,
                body: "I love this Gem!",
                author: "mygreymatter@gmail.com"
            }, {
                stars: 3,
                body: "Its good",
                author: "ironman@gmail.com"
            }]
    }, {
            name: 'Sapphire',
            price: 11.05,
            description: 'Shines bright and splendid',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: '../images/sapphire-full.jpg',
                thumb: '../images/sapphire-thumb.jpg'
        }],
            reviews: [{
                stars: 5,
                body: "I love this Gem!",
                author: "mygreymatter@gmail.com"
            }, {
                stars: 3,
                body: "Its good",
                author: "ironman@gmail.com"
            }]
    }
               ];
})();
