import './img/favicon.ico';
import './sass/main.scss';

import viewLocation from './class/location';

var helloWorld = function() {
    for (let i = 3; i > 0; i-- ) {
    console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
 }
   
helloWorld();

var clickButton = function(){
    viewLocation.getPosition()
}

document.getElementById('btnLocation').onclick = clickButton;
