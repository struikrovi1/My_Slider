
var sliderWidth = document.querySelector(".slider").clientWidth;
var sliderLength = document.querySelectorAll(".slider li").length;
var mySlideWidth = sliderWidth * sliderLength;
// console.log(mySlideWidth);
var sliderUl = document.querySelector(".slider ul")
sliderUl.style.width = mySlideWidth + "px";
var c = 0;

function mySlider() {
    c++;
    if(c>=sliderLength){
        c=0
    }
    sliderUl.style.left = - (c * sliderWidth) + "px"
}
setInterval(function() {
    mySlider()
}, 3000);
console.log(sliderLength);





