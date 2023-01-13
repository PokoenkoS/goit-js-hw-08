import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

    player.on('timeupdate', throttle(onPlay, 1000));
     

   function onPlay (e) {
       localStorage.setItem(LOCALSTORAGE_KEY, e.seconds)
    };
    
   

    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0).catch(function (error) {
        console.error(error)
    });

