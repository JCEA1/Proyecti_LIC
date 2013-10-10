var interval = 4 * 20; // segundos que realizara el cambio
var images = document.getElementsByTagName("img");
var imageArray = [];
var imageCount = images.length;
var current = 0;

var randomize = function(){
return (Math.round(Math.random() * 3 - 1.5));
}
for(var i = 0; i < imageCount; i++){
images[i].className = 'fade-out';
imageArray[i] = images[i];
}
imageArray.sort(randomize);

var fade = function(){

imageArray[current++].className = 'fade-out';
if(current == imageCount){
current = 0;
imageArray.sort(randomize);
}
imageArray[current].className = 'fade-in';

setTimeout(fade, interval * 100);
};
fade();
