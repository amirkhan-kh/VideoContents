const $nextBtn = document.querySelector('#next-btn');
const $backBtn = document.querySelector('#back-btn');
const $playList = document.querySelector('#play-list');
//--------------------------------------------------------
const $videoImage = document.querySelector('#video-content');
const $coverVideo = document.querySelector('#coverVideo');
const $titleVideo = document.querySelector('#title-video');
const $author = document.querySelector('#author');
const $aboutFilm = document.querySelector('#about-Film');
const $timeTo = document.querySelector('#time-To');
const $timeForm = document.querySelector('#time-Form');
//------------------------------------------------------------
//Data Container
let videoPlaying = false;

let videoIndex = 0;
let videos = [
    {
        src: './videos/avatar.mp4',
        title: 'Avatar Back in Theatres Trailler',
        artist: ' 20th Century Fox Canada',
        cover: './images/avatar_image.jpg',
        bio: `Date premiere: December 16, 2022. (USA)
        Director: James Cameron
        Sequel: Avatar 3
        Budget: 460 million USD
        Cash: 2.32 billion USD
        God: 2022`
    },
    {
        src: './videos/spider_man.mp4',
        title: 'SPIDER-MAN: NO WAY HOME - Official Trailer (HD)',
        artist: 'Sony Pictures Entertainment',
        cover: './images/spider_image.jpg',
        bio: `Premiere date: December 17, 2021 (USA)
        Director: Jon Watts
        Film company: Marvel Studios, Columbia Pictures, Pascal Pictures
        Budget: 200 million USD
        Box office: 1.916 billion USD
        Writers: Chris McKenna; Eric Sommers`

    },
    {
        src: './videos/moana_2.mp4',
        title: 'MOANA Live Action - Official Trailer (2024) Zendaya, Dwayne Johnson | Disney+',
        artist: 'Cinematic Pro Studio',
        cover: './images/mona_image.jpg',
        bio: `Premiere date: November 23, 2016 (USA)
        Directors: John Musker, Ron Clements
        Sequel: Moana 2`

    },
    {
        src: './videos/harryPoter.mp4',
        title: 'Harry Potter And The Cursed Child - Trailer (2025) Based On A Book | Teaser PROs Concept Version',
        artist: 'Teaser PRO',
        cover: './images/harry_potter-Imge.jpg',
        bio: `Premiere date: November 16, 2001 (UK)
        Director: Chris Columbus
        Author of the idea: J.K. Rowling
        Based on: Harry Potter and the Philosopher's Stone
        Film series: Harry Potter (film series)`
    },
]
const renderIndex = () =>{
    $coverVideo.src = videos[videoIndex].src;
    $videoImage.src = videos[videoIndex].cover;
    $titleVideo.innerText = videos[videoIndex].title;
    $author.innerText = videos[videoIndex].artist;
    $aboutFilm.innerText = videos[videoIndex].bio;
}
renderIndex()
//-----------------------------------------------------------
//click Funtions

const $playBtn = document.querySelector('#play-btn')
const $pauseBtn = document.querySelector('#pause-btn')

const playVideo = () => {
    videoPlaying = !videoPlaying;

    
    if(videoPlaying){
        $coverVideo.play();
        $playBtn.firstElementChild.classList.add('hidden')
        $playBtn.lastElementChild.classList.remove('hidden')
        document.body.classList.add('animation')
        movieLineTime()

    }
    else {
        $coverVideo.pause();
        $playBtn.firstElementChild.classList.remove("hidden");
        $playBtn.lastElementChild.classList.add("hidden");
        document.body.classList.remove('animation')

        movieLineTime() = false

    }
}
$playBtn.addEventListener('click', playVideo);
//----------------

const nextVideo = () => {
    if (videoIndex + 1 < videos.length) {
        videoIndex ++;
    }   
    else{
        videoIndex = 0;
    }
    renderIndex()
    videoPlaying = false;
    playVideo()
    pauseVideo()
}

$nextBtn.addEventListener('click', nextVideo);
//------------
const backVideo = () => {
    if (videoIndex > 0) {
        videoIndex --;
    }   
    else{
        videoIndex = videos.length -1;
    }
    renderIndex()
    videoPlaying = false;
    playVideo()
    pauseVideo()
}
$backBtn.addEventListener('click', backVideo)
//-------------
const $listTable = document.querySelector('#play-listTable');
const $restPlaylist = document.querySelector('#resPlaylist');

const playlistShow = () =>{
    $restPlaylist.innerText = videos[videoIndex].title
   
}
$playList.addEventListener('click', playlistShow);
//------------
const formaTime = (s) =>{
    let minute = Math.floor(s / 60);
    let secund = Math.floor(s % 60)
    return `${minute.toString().padStart(2, '0')}:${secund.toString().padStart(2, '0')}`
}
const $playLine = document.querySelector('#play-line');
//-----------------------------------------------------------------
//Time video Player
const movieLineTime = () =>{
    let inputRane = setInterval(() => {
        let range = $coverVideo.currentTime / $coverVideo.duration *100;
        $playLine.value = range;
        $timeTo.innerText = formaTime($coverVideo.currentTime)
        $timeForm.innerText = formaTime($coverVideo.duration)
        formaTime($coverVideo.duration)
    }, 100);
}
//---------------------------------------------------------------
//Type Range
const changeRange = (e) => {
    let sekunds = $coverVideo.duration * $playLine.value / 100;
    $coverVideo.currentTime = sekunds;
}
$playLine.addEventListener('input', changeRange)