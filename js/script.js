var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYoutubeIframeAPIReady(){
player = new YT.player('player',{
    height: '360',
    width: '480',
    videoId: 'oowBXzfcl90',
    playerVars: {'mute': 0, 'autoplay': 1},
    events: {  
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
  }

