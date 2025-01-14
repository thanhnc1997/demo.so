const template = document.body;

import pageHeader from './components/pageHeader.js';
import pageFooter from './components/pageFooter.js';

const pathname = location.pathname;
const app = document.getElementById('app');
let main = document.createElement('main');
app.appendChild(await pageHeader());

async function draw(blocks) {
	for (const block of blocks) {
		const _block = await block;
		if(_block) {
			main.innerHTML = '';
			main.appendChild(_block);
			app.appendChild(main);
		}
	}
}

const render = {
	async home() {
		await draw([
			(await import('./pages/homePage/template.js')).render(),
		]);
		app.appendChild(await pageFooter());
	},
}

const SOAPP = {
	async init() {
		await render.home();
		AOS.init();
	}
}

SOAPP.init();