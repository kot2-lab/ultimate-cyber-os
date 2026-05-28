export function setTheme(theme){

if(theme==='purple'){
document.documentElement.style.setProperty('--glow','#c800ff');
}

if(theme==='green'){
document.documentElement.style.setProperty('--glow','#00ff88');
}

if(theme==='blue'){
document.documentElement.style.setProperty('--glow','#00d9ff');
}

localStorage.setItem('theme',theme);
}

export function loadTheme(){
const saved = localStorage.getItem('theme') || 'blue';
setTheme(saved);
}