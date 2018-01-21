const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function(){
    const self = this;

    self.pictures = [
    self.pictureOne = {
        toggle: true,
        likes: 0
    },
    self.pictureTwo = {
        toggle: true,
        likes: 0
    },
    self.pictureThree = {
        toggle: true,
        likes: 0
    },
    self.pictureFour = {
        toggle: true,
        likes: 0
    },
    self.pictureFive = {
        toggle: true,
        likes: 0
    },
    self.pictureSix = {
        toggle: true,
        likes: 0
    }
]

    self.toggleClick = function(picture){
        if(picture.toggle == true){
            picture.toggle = false;
        } else{
            picture.toggle = true;
        }
    }
    
    self.likeButton = function(picture){
        picture.likes += 1;
    }
});