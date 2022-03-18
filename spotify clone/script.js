console.log("Welcome to Spotify")
let songIndex = 0;
let audioElement = new Audio('song/song1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'))
let time = document.getElementsByClassName('time');

let songs = [
    { songname: "Ratan Lambiyan", filepath: "song/song1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Khud Se Bhi Jyada", filepath: "song/song2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Jugnu", filepath: "song/song3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Chup Mahi", filepath: "song/song4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Asal mein", filepath: "song/song5.mp3", coverPath: "covers/5.jpg" },
    { songname: "Meherma", filepath: "song/song6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Kar Gayi Chull", filepath: "song/song7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Uska Hi Bana", filepath: "song/song8.mp3", coverPath: "covers/8.jpg" },
]

let songsmaster = [
    { songname: "Ratan Lambiyan-Jubin Nautiyal", filepath: "song/song1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Khud Se Bhi Jyada-Arijit Singh", filepath: "song/song2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Jugnu-Badshah", filepath: "song/song3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Chup Mahi-BPraak Jasleen", filepath: "song/song4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Asal mein-Darshan Raval", filepath: "song/song5.mp3", coverPath: "covers/5.jpg" },
    { songname: "Meherma-Darshan Raval", filepath: "song/song6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Kar Gayi Chull-Neha Kakkar", filepath: "song/song7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Uska Hi Bana-Arijit Singh", filepath: "song/song8.mp3", coverPath: "covers/8.jpg" },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songn')[0].innerText = songs[i].songname
});

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeallplays();
    }

})

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // updating seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

}
)
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
let x;
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeallplays();
            songIndex = parseInt(e.target.id);
            x = songIndex;
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            audioElement.src = `song/song${songIndex + 1}.mp3`
            mastersongname.innerText = songsmaster[songIndex].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else {
            songIndex = parseInt(e.target.id);
            if (songIndex == x) {
                audioElement.pause();
                masterplay.classList.add('fa-play-circle');
                masterplay.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle')
                e.target.classList.remove('fa-pause-circle')
                gif.style.opacity=0;
                
            }
            else {
                makeallplays();
                songIndex = parseInt(e.target.id);
                x = songIndex;
                e.target.classList.remove('fa-play-circle')
                e.target.classList.add('fa-pause-circle')
                audioElement.src = `song/song${songIndex + 1}.mp3`
                mastersongname.innerText = songsmaster[songIndex].songname;
                audioElement.currentTime = 0;
                audioElement.play();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            }
        }
    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }

    else {
        songIndex += 1;
    }
    audioElement.src = `song/song${songIndex + 1}.mp3`
    mastersongname.innerText = songsmaster[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 7;
    }

    else {
        songIndex -= 1;
    }
    audioElement.src = `song/song${songIndex + 1}.mp3`
    mastersongname.innerText = songsmaster[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})
