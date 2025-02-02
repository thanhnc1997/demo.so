import {data} from '../config/configAccountancyServicesPage.js';

const {hero, about, services} = data;
const template = document.createElement('div');
template.classList.add('accountancy-services-page');

export async function render() {
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="1000">${hero.title}</h2>
			<p class="text-secondary">${hero.content}</p>
			<div class="grid">
				<ul class="list-left"></ul>
				<figure class="image" style="background-image: url(images/accountancy.png)"></figure>
				<ul class="list-right"></ul>
			</div>
		<div>
	</section>
	<section class="about">
		<div class="container">

		</div>
	</section>
	<section class="services">
		<div class="container">

		</div>
	</section>
	`;
	
	for (let i in services.list.slice(0, 5)) {
		let li = document.createElement('li');
		li.innerHTML = `
		<h3>${services.list.slice(0, 5)[i].name}</h3>
		<p>${services.list.slice(0, 5)[i].q}</p>
		`;
		
		template.querySelector('.list-left').appendChild(li);
	}
	
	for (let i in services.list.slice(5)) {
		let li = document.createElement('li');
		li.innerHTML = `
		<h3>${services.list.slice(0, 5)[i].name}</h3>
		<p>${services.list.slice(0, 5)[i].q}</p>
		`;
		
		template.querySelector('.list-right').appendChild(li);
	}
	
	return template;
}

export async function callback() {}