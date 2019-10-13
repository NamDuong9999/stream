
const playVideo = require('./playVideo');

function openVideo(){

    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
       playVideo(stream,'localstream');
    })
    .catch(err => console.log('erro'))  
}
module.exports = openVideo;