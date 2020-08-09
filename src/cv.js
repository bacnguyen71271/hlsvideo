const cv = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

cv.setFfmpegPath(ffmpegInstaller.path);

cv('videos/cang-hang-khong.mp4', { timeout: 432000 }).addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 5',
    '-hls_key_info_file enc.keyinfo',
    '-hls_list_size 0',
    '-f hls'
]).output('videos/cang-hang-khong/index.m3u8').on('end', () => {
    console.log('end');
}).run();
