import { createWindow } from '../core/windowManager.js';

const aiHTML = `
<div id="chatLog"></div>
<input id="aiInput" placeholder="Ask AI">
<button class="cyber-btn" id="sendAI">SEND</button>
`;

const aiWindow = createWindow('AI Assistant',aiHTML);
document.getElementById('desktop').appendChild(aiWindow);

const log = aiWindow.querySelector('#chatLog');

aiWindow.querySelector('#sendAI').onclick=()=>{
const input = aiWindow.querySelector('#aiInput');

const msg = input.value.toLowerCase();

const userDiv = document.createElement('div');
userDiv.textContent = 'YOU: '+msg;
log.appendChild(userDiv);

const aiDiv = document.createElement('div');

if(msg.includes('hello')){
aiDiv.textContent='AI: Hello User';
}else if(msg.includes('theme')){
aiDiv.textContent='AI: Theme System Online';
}else{
aiDiv.textContent='AI: Command Unknown';
}

log.appendChild(aiDiv);

input.value='';
};