var images = [
    "assets/header-img/HomePage 1.png",
    "assets/header-img/Nice dimentions for HomePage.png"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('img-header').src = images[x];
}
randImg();