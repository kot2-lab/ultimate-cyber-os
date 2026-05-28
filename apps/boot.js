const boot = document.createElement('div');

boot.id='bootScreen';

boot.innerHTML=`
<h1>BOOTING CYBER OS...</h1>
`;

boot.style.position='fixed';
boot.style.inset='0';
boot.style.background='#000814';
boot.style.display='flex';
boot.style.justifyContent='center';
boot.style.alignItems='center';
boot.style.color='#00d9ff';
boot.style.fontSize='30px';
boot.style.zIndex='10000';

document.body.appendChild(boot);

setTimeout(()=>{
    boot.remove();
},2500);