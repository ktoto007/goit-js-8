import Players from '@vimeo/player';
var _ = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Players(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    if (seconds > 1) {
      alert(`Ви зупинились на ${seconds} секунді`);
    }
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', _(onPlay, 1000));
