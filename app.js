const music  = new Audio('music/play.mp3');


const song =[
    {
        id:'1',
        songName:`Granuja 
        <div class="subtitle">doble porcion</div>`,
        poster:'img/1.jpg',

    },
    {
        id:'2',
        songName:`Discografia 
        <div class="subtitle">doble porcion</div>`,
        poster:'img/5.jpg',

    }
    ,
    {
        id:'3',
        songName:`Discografia 
        <div class="subtitle">doble porcion</div>`,
        poster:'img/2.jpg',

    }
    ,
    {
        id:'4',
        songName:`Discografia 
        <div class="subtitle">doble porcion</div>`,
        poster:'img/8.jpg',

    }
    ,
    {
        id:'5',
        songName:`Discografia 
        <div class="subtitle">doble porcion</div>`,
        poster:'img/10.jpg',

    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((elemet, i)=>{
    elemet.getElementsByTagName('img')[0].src = song[i].poster;
    elemet.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
})




function Play(){
    if(music.paused || music.currentTime <=0){
        music.play();
        let masterPlay = document.getElementById('play');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        let masterPlay = document.getElementById('play');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
}

