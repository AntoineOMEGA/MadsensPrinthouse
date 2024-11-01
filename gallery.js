var gallery = document.querySelector("#gallery");
var galleryImages = [];
var galleryLocation = window.location.href;
var thisGallery;

if (galleryLocation.endsWith("apparel")){
    thisGallery = "apparel";
}else if (galleryLocation.endsWith("signs")){
    thisGallery = "signs";
}else if (galleryLocation.endsWith("engraving")){
    thisGallery = "engraving";
}else if (galleryLocation.endsWith("trophies")){
    thisGallery = "trophies";
}

function loadImages(){
    fetch("https://madsensprinthouse.com/cgi-bin/getImages.py").then(function(response){
        return response.json();
    }).then(function(data){
        console.log(galleryLocation);
        data.forEach(image => {
            if(image.includes(thisGallery)){
                galleryImages.push(image);
            }
        });
        loadGallery();
    });
}
function createImage(image){
  newImage = document.createElement("div");
  newImage.classList.add("gallery-image");
  newImage.style.backgroundImage = "url('"+image+"')";
  gallery.appendChild(newImage);
}
function loadGallery(){
  if(galleryImages.length > 0){
      gallery.innerHTML = "";
  }
  for (i=0; i<galleryImages.length; i++){
    createImage(galleryImages[i]);
  }
  gallery.style.display = "block";
}
loadImages();