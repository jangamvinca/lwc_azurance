import { createElement, register } from 'lwc';
import { registerWireService } from '@lwc/wire-service';
import '@lwc/synthetic-shadow';

import UiApp from 'ui/app';

registerWireService(register);

const app = createElement('my-app-2', { is: UiApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

// eslint-disable-next-line @lwc/lwc/no-document-query
console.log(document.querySelector('#main'));

console.log('WTF-2');
