console.log("index");

// console.clear();
// Array.from(
//     document.querySelectorAll('.video-tile'),
//     function (el) {
//         const video = el.querySelector('video');

//         el.addEventListener('mouseenter', () => {
//             video.play()
//         });

//         el.addEventListener('mouseleave', () => {
//             video.pause();
//             setTimeout(() => {
//                 video.currentTime = 0
//             }, 400);
//         });
//     });

const elVideoToggle = document.querySelectorAll('.video-toggle');
const videoPlayer = document.querySelectorAll('.video__player');


const buttonbar = document.querySelector('.button');
// const videoPause = document.getElementById('video__pause');
// const videoPlay = document.getElementById('video__play');

const videoTrack = document.querySelectorAll('.video__track')
// const videoSound = document.getElementById('video__sound');
// const soundTrack = document.getElementById('sound__track');



function videoSetting(video, index) {
    video.classList.toggle('active');
    const condition = video.matches('.active');

    if (condition) {
        videoPlayer[index].play();
    } else {
        videoPlayer[index].pause();
    }


    videoTrack[index].addEventListener('change', function () {
        var times = videoPlayer[index].duration / 100;
        videoPlayer[index].currentTime = this.value * times;
        console.log("videoPlayer = " + videoPlayer[index].currentTime);
    });


    // videoPlayer[index].addEventListener('timeupdate', function () {
    //     videoTrack.value = videoPlayer[index].currentTime;
    //     console.log("videoTrack.value = " + videoTrack.value);
    // });
}



// updateVolume = function () {
//     videoPlayer.volume = soundTrack.value / 10;
//     console.log(videoPlayer.volume);
// };

// soundTrack.addEventListener("mousedown", function () {
//     updateVolume();
//     soundTrack.addEventListener("mousemove", updateVolume);
// });
// soundTrack.addEventListener("mouseup", function () {
//     soundTrack.removeEventListener("mousemove", updateVolume);
// });


// const ipt = document.querySelector('input[type=range]')
// ipt.onchange = function () {
//     const val = event.target.value,
//         progress = val / 10 * 100 + '%'
//     console.log(progress)
//     document.documentElement.style.setProperty('--progress', progress)
// }

//按紐向上
function scrollIt() {
    window.scrollTo({
        'behavior': 'smooth',
        'top': 0
    });
}


const btn = document.querySelector('.js-btn');
console.log(btn);
btn.addEventListener('click', function () {
    console.log("be click");
    scrollIt();
});




window.onscroll = function () {
    const top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    if (top >= 500) {
        // console.log("top>100");
        btn.classList.add('fade')
    }
    if (top < 500) {
        // console.log("top<500");
        btn.classList.remove('fade')
    }
    console.log("window.pageYOffset= " + window.pageYOffset);
};