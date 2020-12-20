const doc = document;

function videoStart() {
    doc.querySelector(".video-container").innerHTML = "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 my-video d-flex justify-content-center'><button class='btn-close'><img class='img-close' src='./images/icon/cancel.svg' width='50' height='50' alt='close'></button><video class='video-plr' controls='controls' autoplay='autoplay' width='900'><source src='video/video.mp4' type='video/mp4' codecs='avc1.42E01E, mp4a.40.2'><a href='video/duel.mp4'>Скачайтевидео</a></video></div>";
    doc.body.style.overflow = 'hidden';

    doc.querySelector('.btn-close').addEventListener('click',() => doc.querySelector('.video-container').innerHTML='');
    
}
doc.querySelector('#btn-video').addEventListener('click', videoStart);


