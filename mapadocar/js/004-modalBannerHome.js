// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/x93zzogsDGM?autoplay=1&rel=0';//insiro uma fonte do vídeo
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById('VideoPlayer').src='';//retiro a fonte do vídeo, assim ele "deliga"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('VideoPlayer').src='';//retiro a fonte do vídeo, assim ele "deliga"
    }
}