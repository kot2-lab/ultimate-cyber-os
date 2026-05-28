import { createWindow } from '../core/windowManager.js';
import { setTheme } from '../core/theme.js';

const html = `
<h2>THEMES</h2>

<button class="cyber-btn" id="blueTheme">
Blue Neon
</button>

<button class="cyber-btn" id="purpleTheme">
Purple
</button>

<button class="cyber-btn" id="greenTheme">
Matrix
</button>
`;

const win = createWindow('Theme', html);

document.getElementById('desktop').appendChild(win);

win.querySelector('#blueTheme').onclick=()=>{
    setTheme('blue');
};

win.querySelector('#purpleTheme').onclick=()=>{
    setTheme('purple');
};

win.querySelector('#greenTheme').onclick=()=>{
    setTheme('green');
};