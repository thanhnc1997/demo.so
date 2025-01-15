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
	},
	async about() {
		await draw([
			(await import('./pages/aboutPage/template.js')).render(),
		]);
	}
}

const SOAPP = {
	async init() {
		if (pathname == '' || pathname.includes('index.html')) await render.home();
		if (pathname.includes('about.html')) await render.home();
		AOS.init();
		app.appendChild(await pageFooter());
	}
}

SOAPP.init();