
// bell script 
let navbutton = $(".bell");

navbutton[0].onclick = function() {
    $("#nav-p").toggleClass("show-nav")
    $(".bell").toggleClass("bell-on-nav")
    return false;
}

// img refresh
var images = [
    "assets/header-img/HomePage 1.png",
    "assets/header-img/Nice dimentions for HomePage.png"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('img-header').src = images[x];
}
randImg();


// header script
const text1 = ' <div class="content2"><a class="item-box-header fix1" href="#"><img class="5" src=""></a><a class="item-box-header fix1" href="#"><img class="5" src=""></a><a class="item-box-header fix1" href="#"><img class="5" src=""></a><a class="item-box-header fix1" href="#"><img class="5" src=""></a></div>'
var showMoreButton = $(".show-more");

showMoreButton[0].onclick = function() {
    showMoreButton.text("wait..")
    $(".container").append(text1);
    showMoreButton.text("Show More")
}

// slider script first
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 6000);

// slider script second
var counter2 = 1;
setInterval(function(){
    document.getElementById('radio-' + counter2).checked = true;
    counter2++;
    if(counter2 > 2){
        counter2 = 1;
    }
}, 7000);