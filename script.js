let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('previousBtn');
let imageNumber = 1;
let timer;


const sliderController = (() => {
let images = document.getElementsByClassName('images');

function showSlider() {
    
    for(i = 0; i < images.length; i++) {
        images[i].style.display ='none';
    }
    
    if(imageNumber > images.length) {
        imageNumber = 1;
    }
    if(imageNumber < 1) {
        imageNumber = 4;
    }
    images[imageNumber - 1].style.display = 'block';
    timer = setTimeout(showSlider, 2000);
    imageNumber++
}

function next() {
    clearTimeout(timer);
    imageNumber++;
    timer = setTimeout(showSlider, 2000);
};

function previous() {
    imageNumber = imageNumber -1;
}

return {
    showSlider,
    next,
    previous
}

})();

sliderController.showSlider();


nextBtn.addEventListener('click', () => {
    sliderController.next();
})

prevBtn.addEventListener('click', () => {
    sliderController.previous();
})




