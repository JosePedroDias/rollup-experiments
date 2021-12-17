// PLUGIN (mp3)
import music from '../media/music.mp3';

// PLUGIN (json)
import data from './reference.json';

// PLUGIN (image)
//import logoPng from '../media/logo.png';
import logoJpg from '../media/logo.jpg';
import logoSvg from '../media/logo.svg';


import { greet } from './dep';


console.log( greet('world') );


// PLUGIN (json)
console.log('data', data);


// PLUGIN (mp3)
window.addEventListener('click', () => {
    music.play();
}, {once:true});


// PLUGIN (image)
const logos = [/* logoPng, */ logoJpg, logoSvg];
for (let logo of logos) {
    document.body.appendChild(logo);
}

import('../media/logo.png').then(module => {
    const logo = module.default;
    document.body.appendChild(logo);
});


if (_DEBUG) {
    console.log('IN DEBUG');
} else {
    console.log('IN PROD');
}

if (_SUPERPROD) {
    window.xxx = "SUPERPROD";
}