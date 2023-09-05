const music = document.querySelector("audio");
const img = document.querySelector("img");   
const play = document.getElementById("play");
const artist = document.getElementById("artist");
//const name_1 = document.getElementById("name_1");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = [
    {
    name:"music/Achutam Keshavam-Bhakti.mp3",
    title:"Achutam Keshavam",
    artist:"Kriti Lalan",
    name_1 : "image/Radha1.jpg",
},
{
    name:"music/Barsane Wali Radhe-Bhakti.mp3",
    title:"Radhe Radhe Radhe",
    artist:"Gaurav Krishna Goswami",
    name_1 : "image/Radha2.jpg",
},
{
    name:"music/Achutam Keshavam-Bhakti.mp3",
    title:"Adharam Madhuram",
    artist:"Shreya Ghoshal",
    name_1 : "image/Radha1.jpg",
},
];



let isPlaying = false;
        const playMusic = () => {
            isPlaying = true;
            music.play();
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("anime");

        };
        const pauseMusic = () => {
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause", "fa-play");
            img.classList.remove("anime");

        };
        play.addEventListener("click", () => {
            //if(isPlaying){
                //pauseMusic();
            //}else{
                //playMusic();
            //}
            isPlaying ? pauseMusic() : playMusic();

        });
        if(music.play()){
            setInterval(() => {
                ProgressEvent.value = music.currentTime;
            },500);
        };
        ProgressEvent.onchnge = function(){
            music.play();
            music.currentTime = progress.value;
            play.classList.add("fa-pause");
            play.classList.remove("fa-play");
        };
        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            //music.src = "music/" + songs.name + ".mp3";
            //img.src = "image/" + songs.name + ".jpg";
            music.src = "songs.name";
            img.src = "songs.name_1";
           // music.src = `music/${songs.name}.mp3`;
            //img.src = `images/${songs.name}.jpg`;


        };
        //loadSong(songs[1]);
        songIndex = 0;
        //loadSong(songs[2]);
        const nextSong = () => {
            songIndex = (songIndex + 1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();

        };
        const prevSong = () => {
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();

        };
        next.addEventListener("click", nextSong);
        prev.addEventListener("click", prevSong);