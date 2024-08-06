const imageExamples = document.querySelector('.img-exmples');

function imageChange(n) {
    return `/images/img${n}.png`; // Assuming the images have a .jpg extension
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Inclusive of both min and max
}

function change() {
    var n = getRandomNumber(1, 5);
    imageExamples.src = imageChange(n);
}

setInterval(change, 5000);