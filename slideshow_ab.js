// Creating a slideshow
var slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],

    currentPhotoIndex: 0,
// Display a photo
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
              this.pause();
        }
    },
// End the slideshow
    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');
            
        }
    },

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },

}