let imageNumber = 0;
showSlider();

function showSlider() {
    let images = document.getElementsByClassName('images');
    for(i = 0; i < images.length; i++) {
        images[i].style.display ='none';
    }
    imageNumber++;
    if(imageNumber > images.length) {
        imageNumber = 1;
    }
    images[imageNumber - 1].style.display = 'block';
    setTimeout(showSlider, 2000);
}

function next() {

}

function previous() {

}