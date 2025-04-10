// DOM elements - Document Object Model: app container, videos...
const appContainerEl = document.querySelector("#app-container"); 
const videosEls = document.querySelectorAll("video"); // selecting all videos
const audioIconEls = document.querySelectorAll(".volume"); // selecting all audios
//console.log(videosEls); // logging the videos elements
const heartIconEls = document.querySelectorAll(".fa-heart"); // selecting all heart icons

// Global Variables: active volume
const halfScreenHeight = window.innerHeight / 2; // half of the screen height
let isVolumeEnabled = false; // variable to check if the volume is active


// Events: scroll app container, volume icon click 
appContainerEl.addEventListener("scroll", function() {
    // for each video
    videosEls.forEach(function(video, index) { 
        // acquire information about the video position on the screen
        const videoRect = video.getBoundingClientRect(); // get the position of the video element 
        //console.log(videoRect.top); // logging the video element
        // if the upper part of the edge videoRect.top is between 0 and half of the screen height
        // then start playing the video 
        // OTHERWISE
        // pause the video
        if(videoRect.top >= 0 && videoRect.top <= halfScreenHeight) {
            video.currentTime = 0 // set the video time to 0
            video.play() // play the video
        } else {
            video.pause() // pause the video
        }
    })
})

audioIconEls.forEach(function(audioIcon) {
    audioIcon.addEventListener("click", function() { 
        isVolumeEnabled = !isVolumeEnabled; // toggle the volume variable
        videosEls.forEach(function(video) { // for each video 
            if(isVolumeEnabled == true){
                video.muted = false // unmute the video 
            } else {
                video.muted = true // mute the video   
            }
        })

        let iconClass = ""  // volume icon change
        if(isVolumeEnabled == true) {
            iconClass = "fa-solid fa-volume-high volume" // set the icon class to volume high
        } else {
            iconClass = "fa-solid fa-volume-xmark volume" // set the icon class to volume x mark
        }
        audioIconEls.forEach(function(audioIcon) { // for each audio icon
            audioIcon.className = iconClass // set the icon class to the audio icon
        })
    }) 
}) 

heartIconEls.forEach(function(heartIcon) { // for each heart icon
    heartIcon.addEventListener("click", function() { // when the heart icon is clicked
        heartIcon.classList.toggle("red-heart") // toggle the solid class of the heart icon
        heartIcon.classList.toggle("fa-regular") // toggle the regular class of the heart icon
        let iconClass = "" // heart icon change
        if(heartIcon.classList.contains("red-heart")) { // if the heart icon has the solid class
            iconClass = "fa-regular fa-heart" // set the icon class to regular heart
        } else {
            iconClass = "red-heart fa-heart" // set the icon class to solid heart
        }
    })
})  // probabilmente è la soluzione meno ideale, ma per lo scope del progetto funziona. Ho aggiusto allo style.css il colore del cuore rosso.
    // possibilmente se avrò tempo opterò per una soluzione ottimale
    // ho preso ispirazione dalla funzione del cambio dell'icona del volume