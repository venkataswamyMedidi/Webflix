const killv1 = require('../videos/vol1.mp4');
const kilv2 = require('../videos/killvol2.mp4');
const fiction = require('../videos/Pulp.mp4');
const John = require('../videos/john.mp4');
const Ash = require('../videos/Ash vs Evil Dead.mp4');
const Badlands = require('../videos/Into the Badlands Comic Con.mp4');
const Iron = require('../videos/Marvels IRON FIST.mp4');

const Net = require('../images/moanas.jpg');

const videoUrls = {

   default:Net,
    60032563: killv1,
    60031236: kilv2,
    880640: fiction,
    60010514: "https://s3-us-west-1.amazonaws.com/imdbproject/videos/Batman-+4.mp4",
    902003: "https://s3-us-west-1.amazonaws.com/imdbproject/videos/Batman-+5.mp4",
    520179: "https://s3-us-west-1.amazonaws.com/imdbproject/videos/Batman-+6.mp4",
    70230640: "https://s3-us-west-1.amazonaws.com/imdbproject/videos/Batman-+7.mp4"

};

export default videoUrls;
