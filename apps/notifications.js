const notify = document.createElement('div');

notify.id='notifyBox';

notify.style.position='fixed';
notify.style.top='20px';
notify.style.right='20px';
notify.style.padding='15px';
notify.style.background='rgba(0,0,0,0.6)';
notify.style.backdropFilter='blur(10px)';
notify.style.border='1px solid #00d9ff';
notify.style.borderRadius='15px';
notify.style.color='white';
notify.style.zIndex='9999';

notify.innerText='SYSTEM ONLINE';

document.body.appendChild(notify);

setTimeout(()=>{
    notify.remove();
},3000);