import { createWindow } from '../core/windowManager.js';

const now = new Date();

const calendarHTML = `
<h2>${now.getFullYear()} / ${now.getMonth()+1}</h2>
<p>TODAY : ${now.getDate()}</p>
`;

const calendarWindow = createWindow('Calendar',calendarHTML);
document.getElementById('desktop').appendChild(calendarWindow);