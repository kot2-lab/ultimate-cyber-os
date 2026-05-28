const launcher = document.createElement('div');

launcher.id='launcher';

launcher.innerHTML=`
<button class="cyber-btn">
APPS
</button>
`;

launcher.style.position='fixed';
launcher.style.left='10px';
launcher.style.bottom='70px';
launcher.style.zIndex='9999';

document.body.appendChild(launcher);