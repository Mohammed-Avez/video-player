const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = document.querySelector('.fullScrn__button');


console.log(video);

const togglePlay = function(){
    const method = video.paused ? 'play'  : 'pause';
    video[method]()
  
}


toggle.addEventListener('click', () => {
    togglePlay()
    const icon = video.paused ? '▶ ' : '❚ ❚';
    toggle.innerHTML = icon;
});

const skip = function(){
  
    video.currentTime += parseFloat(this.dataset.skip)
}

const circle = function(e){

    video[this.name] = this.value
    console.log(e.value);
    console.log(this.value);
}

const update = function(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
    console.log(percent);
}

const scrub = function(e){
    console.log(e.target);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration

    video.currentTime = scrubTime;
}


function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
        console.log(video.requestFullscreen);
        console.log(video.requestFullscreen());
    } 
    
}   





skipButtons.forEach( btn => btn.addEventListener('click', skip));


ranges.forEach(range => range.addEventListener('change', circle))

video.addEventListener('timeupdate', update)
progress.addEventListener('click', scrub);




fullScreen.addEventListener('click', openFullscreen);