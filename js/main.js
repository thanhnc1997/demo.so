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
			(await import('./pages/homePage.js')).render(),
		]);
		(await import('./pages/homePage.js')).callback()
	},
	async about() {
		await draw([
			(await import('./pages/aboutPage.js')).render(),
		]);
	},
	async thanks() {
		await draw([
			(await import('./pages/thanksPage.js')).render(),
		]);
	},
	async accountancyServices() {
		await draw([
			(await import('./pages/accountantcyServicesPage.js')).render(),
		]);
	},
}

const SOAPP = {
	async init() {
		if (pathname.includes('demo.so') await render.home();
		if (pathname.includes('about')) await render.about();
		if (pathname.includes('thanks.html')) await render.thanks();
		if (pathname.includes('accountancy-services')) await render.accountancyServices();
		AOS.init();
		app.appendChild(await pageFooter());
	}
}

SOAPP.init();