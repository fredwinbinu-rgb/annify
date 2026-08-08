// Floating Hearts

setInterval(() => {

const heart=document.createElement("div");

heart.innerHTML="💗";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},1200);
const playlist = [
    {
        title: "Innum Konjam Neram",
        image: "assets/song1.jpeg",
        music: "music/song1.mp3"
    },
    {
        title: "Annul Malae",
        image: "assets/song2.jpeg",
        music: "music/song2.mp3"
    },
    {
        title: "Kanamullal",
        image: "assets/song3.jpeg",
        music: "music/song3.mp3"
    },
    {
        title: "Sarvam Kshemikunnavan Nee",
        image: "assets/song4.jpeg",
        music: "music/song4.mp3"
    },
    {
        title: "Ey Sandakara",
        image: "assets/song5.jpeg",
        music: "music/song5.mp3"
    },
    {
        title: "Saiyaara",
        image: "assets/song6.jpeg",
        music: "music/song6.mp3"
    }
];

let current = 0;

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const vinyl = document.getElementById("vinyl");
const cover = document.getElementById("cover");
const title = document.getElementById("songTitle");
const counter = document.getElementById("songCounter");

function loadSong(index){

    const song = playlist[index];

    audio.src = song.music;
    cover.src = song.image;
    title.textContent = song.title;

    if(counter){
        counter.textContent = `${index+1} / ${playlist.length}`;
    }

}

loadSong(current);

play.onclick = () => {

    if(audio.paused){

        audio.play();
        play.textContent = "⏸";
        vinyl.classList.add("spin");

    }else{

        audio.pause();
        play.textContent = "▶";
        vinyl.classList.remove("spin");

    }

};

next.onclick = () => {

    current++;

    if(current >= playlist.length){

        current = 0;

    }

    loadSong(current);

    audio.play();

    play.textContent = "⏸";

    vinyl.classList.add("spin");

};

prev.onclick = () => {

    current--;

    if(current < 0){

        current = playlist.length-1;

    }

    loadSong(current);

    audio.play();

    play.textContent = "⏸";

    vinyl.classList.add("spin");

};

audio.ontimeupdate = () => {

    if(audio.duration){

        progress.value = (audio.currentTime/audio.duration)*100;

    }

};

progress.oninput = () => {

    if(audio.duration){

        audio.currentTime = (progress.value/100)*audio.duration;

    }

};

audio.onended = () => {

    next.click();

};
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("loader-hidden");

},3000);

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("loader-hidden");

        document.body.style.opacity = "1";

    }, 3000);

});