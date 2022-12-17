const frame = document.getElementById('char-frame');
// const av_image = document.getElementById('char-img');

function change(e) {
    av_image.style.animationName = "key";
    setTimeout(() => {
        frame.style.overflow = "visible";
    }, 2300);


}