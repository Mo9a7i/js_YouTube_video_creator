
// 2- Soundcloud Library
const SC = require('soundcloud-downloader')
const fs = require('fs')
const util = require('util');
const streamPipeline = util.promisify(require('stream').pipeline);
// Simple soundcloud call

async function get_track(url, path){
    try {
        const output_file_path = path + 'track.mp3';
        const stream = await SC.download(url);
        const saved = await streamPipeline(stream, fs.createWriteStream(output_file_path));
        console.log(`✅ Done downloading ${output_file_path}`)
    } catch (error) {
        console.log('failed to download track')
    }   
}

module.exports.get_track = get_track;