const galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function(){
    const self = this;

    self.pictures = [
    self.pictureOne = {
        toggle: true
    },
    self.pictureTwo = {
        toggle: true
    },
    self.pictureThree = {
        toggle: true
    },
    self.pictureFour = {
        toggle: true
    },
    self.pictureFive = {
        toggle: true
    },
    self.pictureSix = {
        toggle: true
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
        console.log('Clicked button for:', picture);
        
    }
});