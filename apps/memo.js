import { createWindow } from '../core/windowManager.js';
import { saveData, loadData } from '../core/storage.js';

const memoHTML = `
<textarea id="memoArea" style="height:200px"></textarea>
`;

const memoWindow = createWindow('Memo',memoHTML);
document.getElementById('desktop').appendChild(memoWindow);

const memoArea = memoWindow.querySelector('#memoArea');

memoArea.value = loadData('memo') || '';

memoArea.addEventListener('input',()=>{
saveData('memo',memoArea.value);
});
import { registerApp }
from '../system/appRegistry.js';

registerApp('memo', () => {

    document
    .getElementById('desktop')
    .appendChild(memoWindow);
});
