console.log('script loaded')
let player;

function onYouTubeIframeAPIReady() {
    console.log('api loaded')

    player = new YT.Player("player", {
        height: 500,
        width: 900,
        videoId: 'cReuQk0pJbI',
        playerVars: { 'mute': 0, 'autoplay': 1 },
        events: {}
    })
}