
let header = document.getElementsByClassName('container-header');
let currentColor = 0;

function changeBackgroundColor() {
    if(currentColor === 0) {
        header[0].style.background = 'linear-gradient(90deg, #4F0E1A 0%, #443A53 21.92%, #3184B4 110.74%)';
        currentColor = 1;
    } else {
        header[0].style.background = 'linear-gradient(90deg, #4F0E1A 0%, #443A53 68.63%, #3184B4 110.74%)';
        currentColor = 0;
    }
}

window.onload = setInterval(changeBackgroundColor, 3500);    
