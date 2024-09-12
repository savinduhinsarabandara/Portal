let mainBody=document.getElementById('main');
let body=document.getElementById('body');
let player = document.getElementById('player');
let content = document.getElementById('content');
let songCont = document.getElementById('song');



let black1 = 'rgb(0,0,0)';
let black2 = 'rgba(255, 255, 255, 0.158)';
let black3 = 'rgb(18, 18, 18)';

let white1 ='rgb(200, 200, 200)'
let white2 = 'rgba(255, 255, 255, 0.4)';
let white3 = 'rgba(255, 255, 255, 0)';


function darkmode(){
    mainBody.style.backgroundImage = '';
    mainBody.style.backgroundColor = black1;
    player.style.backgroundColor = black3;
    content.style.backgroundColor = black3;
    player.style.color = 'white';
    content.style.color = 'white';
    songs.forEach((song, index) => {
        let songCont2 = document.getElementById('songLists'+index);
        songCont2.style.backgroundColor = black3;
        songCont2.style.color = 'white';
    })
}

function lightmode(){
    mainBody.style.backgroundImage = 'none';
    mainBody.style.backgroundColor = white1;
    player.style.backgroundColor = white2;
    player.style.color = '#555';
    content.style.backgroundColor = white2;


    songs.forEach((song, index) => {
        let songCont2 = document.getElementById('songLists'+index);
        songCont2.style.backgroundColor = white3;
        songCont2.style.color = '#555';
    })
}
function picturemode(){
    let pictures =[
        'wp1.jpg',
        'wp2.jpg',
        'wp3.jpg',
        'wp4.jpg',
        'wp5.png',
        'wp6.jpg',

    ]
    let wpad = Math.floor(Math.random() * pictures.length);
    mainBody.style.backgroundImage = `url(${pictures[wpad]})`;
    mainBody.style.backgroundImage = `background-position: center;`;
    mainBody.style.backgroundImage = `background-attachment: fixed;`;
    mainBody.style.backgroundImage = `background-size: coverk;`;
    player.style.backgroundColor = white2;
    player.style.color = '#555';
    content.style.backgroundColor = white2;


    songs.forEach((song, index) => {
        let songCont2 = document.getElementById('songLists'+index);
        songCont2.style.backgroundColor = white3;
        songCont2.style.color = '#555';
    })
}

