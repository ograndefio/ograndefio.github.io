let player;
let videoId = "gRwgNC6R9-c"
l
function onYouTubeIframeAPIReady() {
    console.log('api loaded')

    player = new YT.Player("player", {
        height: 0,
        width: 0,
        videoId: videoId,
        playerVars: { 'mute': 0, 'autoplay': 1 },
        events: {}
    })
}