import { MusicList } from "../data.js";

const MusicPlayer = {
    after_render:()=>{
        //song
        let closeModal1 = document.querySelector("#closeModal1");
        let closeModal2 = document.querySelector("#closeModal2");

      
        let trackCover = document.querySelector(".track-cover");
        let trackName = document.querySelector(".track-name");
        let trackArtist = document.querySelector(".track-artist");
        let musicPlayer = document.querySelector(".music-player");
        //buttons
        const playButton = document.querySelector(".play-pause");
        let shuffleButton = document.querySelector(".shuffle");
        let prevButton = document.querySelector(".prev-track");
        let nextButton = document.querySelector(".next-track");
        let repeatButton = document.querySelector(".repeat");
        let randomIcon = document.querySelector(".fa-random");
        //slider
        let slider = document.querySelector(".slider");
        let currentTime = document.querySelector(".current-time");
        let totalDuration = document.querySelector(".total-duration");

        let trackIndex = 0;
        let isPlaying = false;
        let isRandom = false;
        let updateTimer;
        let currTrack = document.createElement('audio');

        playButton.addEventListener("click",(e)=>{
            document.querySelector(".pp").classList.toggle("fa-circle-play");
            document.querySelector(".pp").classList.toggle("fa-circle-pause");
            trackCover.classList.toggle("rotate-anim");
            trackCover.classList.toggle("pause-anim");
            playPauseTrack();
        })
        slider.addEventListener("change",seekTo);
        loadTrack(trackIndex);
        shuffleButton.addEventListener("click",randomTrack);
        prevButton.addEventListener("click",prevTrac);
        nextButton.addEventListener("click",nextTrack);
        repeatButton.addEventListener('click',repeatTrack);
        closeModal1.addEventListener("click",closeSong);
        closeModal2.addEventListener("click",closeSong);
        function loadTrack(index){
            clearInterval(updateTimer);
            reset();
            currTrack.src = MusicList[index].music;
            // console.log(currTrack);
            currTrack.load();
            trackCover.style.backgroundImage = `url("./${MusicList[index].img}")`;
           trackName.textContent = `${MusicList[index].name}`;
           trackArtist.textContent = `${MusicList[index].artist}`;
           updateTimer = setInterval(setUpdate,1000);
           currTrack.addEventListener("ended",nextTrack);
           var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
           var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
           musicPlayer.style.backgroundColor = `#${randomColor1}`
           musicPlayer.style.backgroundImage = `linear-gradient(45deg,#${randomColor1} 0%,#${randomColor2} 100%)`;
        }
        function reset(){
            currentTime.textContent = "00:00";
            totalDuration.textContent = "00:00";
            slider.value = 0;
        }
        function randomTrack(){
            isRandom? pauseRandom():playRandom();
            
        }
        function playRandom(){
            isRandom=true;
            randomIcon.style.color = "black";
        }
        function pauseRandom(){
            isRandom=false;
            randomIcon.style.color = "white";
            
        }
        function repeatTrack(){
            let index = trackIndex;
            loadTrack(index);
            playTrack();
        }
        function playPauseTrack(){
            isPlaying?pauseTrack():playTrack();
        }
        function playTrack(){
            currTrack.play();
            isPlaying =true;
        }
        function pauseTrack(){
            currTrack.pause();
            isPlaying = false;
        }
        function nextTrack(){
            if(trackIndex<MusicList.length-1 && isRandom===false){
                trackIndex++;
            }else if(trackIndex<MusicList.length-1 && isRandom===true){
                let randomIndex = Number.parseInt(Math.random()*MusicList.length);
                trackIndex=randomIndex;
            } 
            else{
                trackIndex=0;
            }
            loadTrack(trackIndex);
            playTrack();
        }
        function prevTrac(){
            if(trackIndex>0){
                trackIndex-=1
            }else{
                trackIndex = MusicList.length-1;
            }
            loadTrack(trackIndex);
            playTrack();
        }
        function seekTo(){
            let seekto = currTrack.duration *(slider.value/100);
            currTrack.currentTime = seekto;
        }
        function setUpdate(){
            let seekPosition = 0;
            if(!isNaN(currTrack.duration)){
                seekPosition = currTrack.currentTime *(100/currTrack.duration);
                slider.value = seekPosition;
                let currentMinutes = Math.floor(currTrack.currentTime/60);
                let currSeconds = Math.floor(currTrack.currentTime-currentMinutes*60);
                let durationMinutes = Math.floor(currTrack.duration/60);
                let durationSeconds = Math.floor(currTrack.duration-durationMinutes*60);

                if(currSeconds<10){
                    currSeconds = "0"+currSeconds;
                }
                if(durationSeconds <10){
                    durationSeconds = "0"+durationSeconds;
                }
                if(currentMinutes<10){
                    currentMinutes = "0"+currentMinutes;
                }
                if(durationMinutes<10){
                    durationMinutes ="0"+durationMinutes;
                }
                currentTime.textContent = currentMinutes+":"+currSeconds;
                totalDuration.textContent = durationMinutes+":"+durationSeconds;
            }
        }
        function closeSong(){
            currTrack.src = "";
        }
    },
    render:()=>{
        return `
        <div class="music-player">
        <div class="track-details">
            <div class="track-cover pause-anim">

            </div>
            <div class="track-name">
                track name
            </div>
            <div class="track-artist">
        track artist
            </div>
        </div>
    
        <div class="slider-container">
            <div class="current-time">
                00:00
            </div>
            <input type="range" min="1" max="100" value="0" class="slider">
            <div class="total-duration">
                00:00
            </div>
        </div>
    
        <div class="buttons">
            <div class="shuffle">
                <i class="fas fa-random fa-1.5x" title="shuffle"></i>
            </div>
            <div class="prev-track">
                <i class="fa-solid fa-backward-step fa-1.5x" title="previous"></i>
            </div>
            <div class="play-pause">
                <i class="fa-solid fa-circle-play fa-1.5x pp" title="play"></i>
            </div>
            <div class="next-track">
                <i class="fa-solid fa-forward-step fa-1.5x" title="next"></i>
            </div>
            <div class="repeat">
                <i class="fa fa-repeat fa-1.5x" title="repeat"></i>
            </div>
        </div>
    </div>
        `
    }
}
export default MusicPlayer;