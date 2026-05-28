if(!localStorage.getItem('tutorialDone')){

alert(`
WELCOME TO ULTIMATE CYBER OS

・Drag windows
・Resize windows
・Play music
・Manage tasks
`);

localStorage.setItem('tutorialDone','true');
}