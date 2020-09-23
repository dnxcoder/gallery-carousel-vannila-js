

const list = document.querySelector('.list');
const track = document.querySelector('.track-picks');

let countMoves = 0;

const handleChosePicture = (e) => {
    document.querySelector('.canvas').style.backgroundImage = `url(${e.target.src})`
}


const handleLeftClick = () => {
    const trackWidth = track.offsetWidth;
    if(countMoves <=0) return;
    countMoves--;

    list.style.transform = `translateX(${-trackWidth * countMoves}px)`;

}

const handleRightClick = (e) => {

    const sobra = list.offsetWidth/track.offsetWidth;
    const trackWidth = track.offsetWidth;
    
    if(countMoves>=1) return;
    
    countMoves++;
    totalMoves = countMoves * trackWidth;
    console.log(totalMoves)
    list.style.transform = `translateX(${-trackWidth * countMoves}px)`;
}



document.querySelectorAll('.list')[0].addEventListener('click', handleChosePicture);
document.querySelector('.button-left').addEventListener('click', handleLeftClick);
document.querySelector('.button-right').addEventListener('click', handleRightClick);

