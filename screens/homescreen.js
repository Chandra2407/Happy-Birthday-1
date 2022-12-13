import MusicPlayer from "../components/musicplayer.js";

const HomeScreen = {
    after_render: () => {
      const arts = document.querySelector(".arts");
      const modalTitle = document.getElementById("modalTitle");
      const modalBody = document.getElementById("modalBody");
      arts.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "My Arts";
          modalBody.innerHTML = `
          <div class="art-images">
           <ul class="art-list">
               <li>
                   <div class="art-container">
                       <img src="./img/1.jpg" alt="image1">
                   </div>
               </li>
               <li>
                <div class="art-container">
                    <img src="./img/2.jpg" alt="image2">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/3.jpg" alt="image3">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/4.jpg" alt="image4">
                </div>
            </li>
           </ul> 
    </div>
            `
      })

      const babies = document.querySelector(".babies");
      babies.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "My Babies";
          modalBody.innerHTML = `
          <div class="art-images">
           <ul class="art-list">
               <li>
                   <div class="art-container">
                       <img src="./img/sheba.png" alt="sheba">
                   </div>
               </li>
               <li>
                <div class="art-container">
                    <img src="./img/tom.png" alt="tom">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/whitecat.png" alt="whitecat">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/3babies.png" alt="3babies">
                </div>
            </li>
           </ul> 
    </div>
          `;
      })

      const artists = document.querySelector(".artists");
      artists.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "My Fav People";
          modalBody.innerHTML = `
          <div class="art-images">
           <ul class="art-list">
               <li>
                   <div class="art-container">
                       <img src="./img/bts.png" alt="bts">
                   </div>
               </li>
               <li>
                <div class="art-container">
                    <img src="./img/levi.png" alt="levu">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/eren.png" alt="eren">
                </div>
            </li>
            <li>
                <div class="art-container">
                    <img src="./img/eren-levi.png" alt="eren-levi">
                </div>
            </li>
            <li>
            <div class="art-container">
                <img src="./img/light-l1.png" alt="light-l">
            </div>
            </li>
            <li>
            <div class="art-container">
                <img src="./img/oned.png" alt="oned">
            </div>
            </li>
           </ul> 
    </div>
          `;
      })

      const songs = document.querySelector(".songs");
      songs.addEventListener("click",(e)=>{
          modalTitle.innerHTML = "My Fav Songs";
          modalBody.innerHTML =`${MusicPlayer.render()}`;
          MusicPlayer.after_render();
      })

      const memories = document.querySelector(".notes");
      memories.addEventListener("click",(e)=>{
        //   document.location.href = "https://yournotes-app.netlify.app/";
         window.open("https://yournotes-app.netlify.app/","_blank");
      })
    
    },
    render: () => {
        return `
        <div class="birthday-container">
        <div class="birthday-contents">
            <ul class="contents-list">
                <li>
                    <h1>Happy Birthday</h1>
                    <h2>Ankita 😄</h2>
                </li>
                <li>
                    <h4>Wish you a great birthday</h4>
                    <p>Thank you for being such a great friend and<br>
                      tolerating my stupidiy.<br>
                    Stay Amazing Always
                    </p>
                </li>
            </ul>
        </div>
        <div class="birthday-image">
            <div class="image-container">
                <img src="https://tlr.stripocdn.email/content/guids/CABINET_34e1c02696a90003bbf75ba3babc3517/images/87761531901462073.png" alt="birthday-image">
            </div>
        </div>
    </div>
    <div class="cards">
        <div class="arts" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>???</h4>
        </div>
        <div class="babies" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>???</h4>
        </div>
        <div class="artists" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>???</h4>
        </div>
        <div class="songs" data-bs-toggle="modal" data-bs-target="#modal">
            <h4>???</h4>
        </div>
        <div class="notes">
            <h4>???</h4>
        </div>
    </div>
    `
    }
}
export default HomeScreen;

