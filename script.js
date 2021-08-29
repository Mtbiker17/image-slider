let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('previousBtn');
let dots = document.getElementsByClassName('navDots');
let dotNumber = 0
let imageNumber = 0;
let timer;


const sliderController = (() => {
let images = document.getElementsByClassName('images');


function showSlider() {
    
    for(i = 0; i < images.length; i++) {
        images[i].style.display ='none';
    }
    imageNumber++
    if(imageNumber > images.length) {
        imageNumber = 1;
    }
    if(imageNumber < 1) {
        imageNumber = 4;
    }
    images[imageNumber - 1].style.display = 'block';
    timer = setTimeout(showSlider, 4000);

    for(j = 0; j < dots.length; j++) {
        dots[j].classList.remove('active')
    }
    dots[imageNumber - 1].classList.add('active');
}

function next() {
    clearTimeout(timer);
    showSlider();
};

function previous() {
    clearTimeout(timer);
    imageNumber = imageNumber - 2
    showSlider();
}

dots[0].addEventListener('click', () => {
    clearTimeout(timer);
    imageNumber = 0;
    showSlider();
})

dots[1].addEventListener('click', () => {
    clearTimeout(timer);
    imageNumber = 1;
    showSlider();
})

dots[2].addEventListener('click', () => {
    clearTimeout(timer);
    imageNumber = 2;
    showSlider();
})

dots[3].addEventListener('click', () => {
    clearTimeout(timer);
    imageNumber = 3;
    showSlider();
})

return {
    showSlider,
    next,
    previous,
}
})();

sliderController.showSlider();


nextBtn.addEventListener('click', () => {
    sliderController.next();
})

prevBtn.addEventListener('click', () => {
    sliderController.previous();
})
