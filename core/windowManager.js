let zIndexCounter = 1;

export function createWindow(title, contentHTML){

const win = document.createElement('div');
win.className = 'window';
win.style.left = '100px';
win.style.top = '100px';

win.innerHTML = `
<div class="window-header">
<h3>${title}</h3>
<div class="window-controls">
<button class="window-btn min">─</button>
<button class="window-btn max">□</button>
<button class="window-btn close">×</button>
</div>
</div>
<div class="window-content">${contentHTML}</div>
<div class="resize-handle"></div>
`;

setupDrag(win);
setupResize(win);
setupControls(win,title);

return win;
}

function setupDrag(win){
const header = win.querySelector('.window-header');

let dragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener('mousedown',e=>{
dragging = true;
offsetX = e.clientX - win.offsetLeft;
offsetY = e.clientY - win.offsetTop;

zIndexCounter++;
win.style.zIndex = zIndexCounter;
});

window.addEventListener('mousemove',e=>{
if(!dragging) return;

win.style.left = e.clientX-offsetX+'px';
win.style.top = e.clientY-offsetY+'px';
});

window.addEventListener('mouseup',()=>{
dragging=false;
});
}

function setupResize(win){
const handle = win.querySelector('.resize-handle');

let resizing=false;
let startX,startY,startW,startH;

handle.addEventListener('mousedown',e=>{
resizing=true;
startX=e.clientX;
startY=e.clientY;
startW=win.offsetWidth;
startH=win.offsetHeight;
});

window.addEventListener('mousemove',e=>{
if(!resizing)return;

win.style.width = startW + (e.clientX-startX)+'px';
win.style.height = startH + (e.clientY-startY)+'px';
});

window.addEventListener('mouseup',()=>{
resizing=false;
});
}

function setupControls(win,title){

win.querySelector('.min').onclick=()=>{
win.classList.toggle('minimized');
};

win.querySelector('.max').onclick=()=>{
win.classList.toggle('maximized');
};

win.querySelector('.close').onclick=()=>{
win.style.display='none';

const task=document.createElement('div');
task.className='task-item';
task.textContent=title;

task.onclick=()=>{
win.style.display='block';
task.remove();
};

document.getElementById('taskbar').appendChild(task);
};
}
