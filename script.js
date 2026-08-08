const background = document.querySelector('#background');
const song = document.querySelector('#song');
const thumbnail = document.querySelector('#thumbnail');
const artistName = document.querySelector('.artistName');
const songName = document.querySelector('.songName');
const progress = document.querySelector('#progress');

let pausePlay =document.querySelector('#playPause');
let isPlaying = true;
let songIndex = 0;
songs=['./music/onedance.mp3','./music/godsplan.mp3','./music/passionfruit.mp3','./music/work.mp3','./music/hotlinebling.mp3','./music/mia.mp3','./music/inmyfeelings.mp3','./music/niceforwhat.mp3','./music/loveme.mp3','./music/headlines.mp3'];thumbnails=['./images/onedance.png','./images/godsplan.png','./images/passionfruit.png','./images/work.png','./images/hotlinebling.png','./images/mia.png','./images/inmyfeelings.png','./images/niceforwhat.png','./images/loveme.png','./images/headlines.png'];
artistNames=['Drake,Wizkid,Kyla','Drake','Drake','Rihanna,Drake','Drake','Bad Bunny, Drake','Drake','Drake','Lil Wayne,Drake,Future','Drake'];
songNames=['One Dance',"God's Plan",'Passionfruit','Work','Hotline Bling','MIA(feat.Drake)','In My Feelings','Nice For What','Love Me','Headlines'];

function playPause() {
    if (isPlaying) {
        pausePlay.src = "./icons/pause.png"        
        song.play();
        thumbnail.classList.add("spin");
        isPlaying = false;
    } else {
        pausePlay.src = "./icons/play.png"
        song.pause();
        thumbnail.classList.remove("spin");
        isPlaying = true;
    }
}

song.addEventListener('ended', function(){
    nextSong();
});
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    artistName.innerHTML = artistNames[songIndex];
    songName.innerHTML = songNames[songIndex];
    isPlaying = true;
    
    playPause();
}
function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = thumbnails[songIndex];
    artistName.innerHTML = artistNames[songIndex];
    songName.innerHTML = songNames[songIndex];
    isPlaying = true;

    playPause();
}
function updateValue() {
    if (isNaN(song.duration)) return;
    progress.max = song.duration;
    progress.value = song.currentTime;

    document.querySelector('.currentTime').innerHTML = (formatting(Math.floor(song.currentTime)));
    document.querySelector('.durationTime').innerHTML = (formatting(Math.floor(song.duration)));
};
function formatting(time) {
    let minutes = Math.floor((time/60));
    let seconds = Math.floor(time%60);
    if (seconds < 10){ 
        seconds  = "0"+seconds;
    };
    return minutes+":"+seconds;
};
setInterval(updateValue, 500);
function changeProgressBar() {
    song.currentTime = progress.value;
};