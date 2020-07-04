const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg('videos/thu-cung.mp4', { timeout: 432000 }).addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 5',
    '-hls_list_size 0',
    '-f hls'
]).output('videos/thu-cung/index.m3u8').on('end', () => {
    console.log('end');
}).run();
