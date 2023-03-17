let player;
let lightLockId = "gRwgNC6R9-c"
let videoNeocities = 'cReuQk0pJbI'
function onYouTubeIframeAPIReady() {
    console.log('api loaded')

    player = new YT.Player("player", {
        height: 0.0001,
        width: 0.0001,
        videoId: lightLockId,
        playerVars: { 'mute': 0, 'autoplay': 1 },
        events: {}
    })
}