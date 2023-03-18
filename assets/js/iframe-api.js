let player;
const lightLockId = "gRwgNC6R9-c"
const videoNeocities = "he8fOtVDj4Y&t=2s"
const sciroccoId = "he8fOtVDj4Y"

let fileName = location.href.split("/").slice(-1);
let videoId;

console.log(fileName[0])
switch(fileName[0]){
    case 'heart.html':
        videoId = lightLockId;
        break
    case 'ofio.html':
        videoId = sciroccoId;
        break

    default:
        videoId = videoNeocities;
        break
}

console.log(videoId)

function onYouTubeIframeAPIReady() {
    console.log('api loaded')

    player = new YT.Player("player", {
        height: 0.001,
        width: 0.001,
        videoId: videoId,
        playerVars: { 'mute': 0, 'autoplay': 1 },
        events: {}
    })
}