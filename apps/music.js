import { createWindow } from '../core/windowManager.js';

const musicHTML = `
<select id="musicSelect">
<option value="https://cdn.pixabay.com/audio/2022/03/15/audio_c8b2a5d5fd.mp3">Cyber</option>
<option value="https://cdn.pixabay.com/audio/2022/10/25/audio_94637f114d.mp3">Lofi</option>
</select>

<input type="file" id="musicUpload" accept=".mp3">

<input type="range" id="volume" min="0" max="1" step="0.01" value="0.5">

<button class="cyber-btn" id="playBtn">PLAY</button>
<button class="cyber-btn" id="pauseBtn">PAUSE</button>

<audio id="bgm" loop></audio>
`;

const musicWindow = createWindow('Music',musicHTML);

document.getElementById('desktop').appendChild(musicWindow);

const bgm = document.getElementById('bgm');

const select = document.getElementById('musicSelect');
select.onchange=()=>{
bgm.src = select.value;
};

document.getElementById('playBtn').onclick=()=>{
bgm.play();
};

document.getElementById('pauseBtn').onclick=()=>{
bgm.pause();
};

document.getElementById('volume').oninput=e=>{
bgm.volume = e.target.value;
};

document.getElementById('musicUpload').onchange=e=>{
const file = e.target.files[0];

if(file){
bgm.src = URL.createObjectURL(file);
bgm.play();
}
};
