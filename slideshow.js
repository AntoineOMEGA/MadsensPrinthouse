//Slideshow
var slideshow = document.getElementById("slideshow");
var slides = [];
var slideshowHeight = 100;
var slideshowWidth = 100;
var slideContainer = document.createElement("div");

slideshow.style.height = slideshowHeight+"%";
slideshow.style.width = slideshowWidth+"%";
slideContainer.style.height = slideshowHeight+"%";

function loadImages(){
    fetch("https://madsensprinthouse.com/cgi-bin/slideshow.py").then(function(response){
        return response.json();
    }).then(function(data){
        data.forEach(image => {
            slides.push(image);
        });
        loadSlides();
    });
}

function createSlide(img){
  let slide = document.createElement("div");
  if(img == slides[0]){
    slide.id="firstSlide";
  }
  slide.classList.add("slide");
  slideContainer.appendChild(slide);
  slide.style.display = "inline-block";
  slide.style.height = slideshowHeight+"%";
  slide.style.width = slideshowWidth/slides.length+"%";
  slide.style.backgroundImage = "url('"+img+"')";
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPositon = "center";
  slideshow.appendChild(slideContainer);
}
function loadSlides(){
    slideContainer.style.width = slideshowWidth*slides.length+"%";
    slides.forEach(img => createSlide(img));
}
loadImages();

var sliding = false;

function slide(){
  if (sliding == false){
    clearInterval(time)
    sliding = true;
    let firstSlide = document.getElementById("firstSlide");
    firstSlide.style.marginLeft = -1*slideshowWidth/slides.length+"%";
    setTimeout(function(){
      var first = slides.shift();
      slides.push(first);
      slideContainer.innerHTML="";
      slides.forEach(img => createSlide(img));
      sliding = false;
      time = setInterval(slide,6000);
    },1000);
  }
}
function slideBack(){
  if (sliding == false){
    clearInterval(time)
    sliding = true;
    var last = slides.pop();
    slides.unshift(last);
    slideContainer.innerHTML="";
    slides.forEach(img => createSlide(img));
    let firstSlide = document.getElementById("firstSlide");
    firstSlide.style.marginLeft = -1*slideshowWidth/slides.length+"%";
    setTimeout(function(){
      firstSlide.style.marginLeft = 0;
    },10);
    setTimeout(function(){
      sliding = false;
      time = setInterval(slide,6000);
    },1000);
  }
}

var time = setInterval(slide,6000);
