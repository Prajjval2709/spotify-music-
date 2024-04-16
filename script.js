console.log("welcome to spotify");

//intialize the  variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
  
    {songName: "RAM_Aayenge" , filePath : "songs/1.mp3" , coverPath: "covers/Ram ayenge.png"},
    {songName: "O_Mahi_0_Mahi" , filePath : "songs/2.mp3" , coverPath: "covers/O-Maahi.jpg"},
    {songName: "Ve Haniya" , filePath : "songs/3.mp3" , coverPath: "covers/VE HANIYA.jpg"},
    {songName: "Hukum" , filePath : "songs/4.mp3" , coverPath: "covers/Jailer.jpg "},
    {songName: "NTR 30" , filePath : "songs/5.mp3" , coverPath: "covers/Jr-NTR.jpg"},
    {songName: "Yimmy_Yimmy" , filePath : "songs/6.mp3" , coverPath: "covers/yimmy.jpeg"},
    {songName: "Cheques" , filePath : "songs/7.mp3" , coverPath: "covers/SHUBH.jpeg"},
    {songName: "YOU_&_ME" , filePath : "songs/8.mp3" , coverPath: "covers/SHUBH.jpeg"},
   
  
]

songItems.forEach((element ,i) => {
    
element.getElementsByTagName("img")[0].src = songs[i].coverPath;    
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;    
});

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress = parseInt(audioElement.currentTime/audioElement.duration *100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-circle-play');})
} 




Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click' ,(e)=>{
console.log(e.target);
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-pause-circle');
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1 ;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})