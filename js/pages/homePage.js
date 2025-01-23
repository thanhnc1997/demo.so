import {data} from '../config/configHomePage.js';

const {hero, about, services, testimonials} = data;

export async function render() {
	const template = document.createElement('div');
	template.classList.add('home-page');
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<h1 class="text-uppercase">${hero.title}</h1>
			<p class="text-center text-secondary">${hero.desc}</p>
			<figure class="image" style="background-image: url(images/hero.png)"></figure>
		</div>
	</section>
	<section class="about">
		<div class="grid overflow-hidden">
			<figure class="image"><img src="images/about.png" data-aos="fade-right" data-aos-duration="500"></figure>
			<div class="content">
				<h2 class="text-uppercase">${about.title}</h2>
				${about.desc}
				<a href="mailto:info@smartoutsourcing.co.uk" class="btn btn-outline">Request a quote</a>
			</div>
		</div>
	</section>
	<section class="services" id="services">
		<div class="container">
			<h4 class="text-uppercase text-secondary small-headline mb-14">Our Services</h4>
			${services.desc}
			<div class="list">
				<div class="container">
					<div class="grid">

					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="testimonial">
		<div class="container">
			<h4 class="text-uppercase text-secondary small-headline mb-14">Why Our Clients Trust Us?</h4>
			${testimonials.desc}
			<div class="list">
				<div class="overflow-auto">
					<div class="grid"></div>
				</div>
			</div>
		</div>
	</section>
	`;
	
	let servicesList = template.querySelector('.services .list .grid');
	let cta = document.createElement('div');
	cta.classList.add('cta');
	cta.innerHTML = `
	<div>
		<p class="mb-8">Which<br>specialist<br>do you need?</p>
		<span class="d-block mb-40">Leave a request and we’ll be<br>in touch with you as soon<br>as possible</span>
		<a href="mailto:info@smartoutsourcing.co.uk" class="btn btn-outline" data-aos="fade-up" data-aos-duration="500">Request a quote</a>
	</div>
	`;

	for (let i in services.list) {
		let figure = document.createElement('figure');

		figure.innerHTML = `
		<div class="image" style="background-image: url(${services.list[i].image})"></div>
		<figcaption>
			<span class="text-right">0${parseInt(i) + 1}</span>
			<h3>${services.list[i].name}</h3>
		</figcaption>
		`;

		servicesList.appendChild(figure);
	}
	
	if (window.innerWidth < 1800) {
		servicesList.insertBefore(document.createElement('div'), servicesList.children[2]);
		servicesList.insertBefore(cta, servicesList.children[4]);
	}
	else {
		servicesList.insertBefore(cta, servicesList.children[2]);
	}
	
	
	let testominalsList = template.querySelector('.testimonial .grid');

	for (let i in testimonials.list) {
		let div = document.createElement('div');
		div.classList.add('item');
		if (i == 0) div.style.cssText = 'border-radius: 28px 0 0 0 !important';
		if (i == 0 && window.innerWidth < 1140) div.style.cssText = 'border-radius: 24px !important';
		if (i == 1) div.style.cssText = 'border-radius: 0 28px 0 0 !important';
		if (i == 1 && window.innerWidth < 1140) div.style.cssText = 'border-radius: 0 24px !important';
		if (i == testimonials.list.length - 1) div.style.cssText = 'border-radius: 0 0 28px 0 !important; border-bottom: 1px solid #D9D9D9;';
		if (i == testimonials.list.length - 1 && window.innerWidth < 1140) div.style.cssText = 'border-radius: 24px !important; border-bottom: 1px solid #D9D9D9;';
		if (i == testimonials.list.length - 2) div.style.cssText = 'border-radius: 0 0 0 28px !important; border-bottom: 1px solid #D9D9D9;';
		if (i == testimonials.list.length - 2 && window.innerWidth < 1140) div.style.cssText = 'border-radius: 24px !important; border-bottom: 1px solid #D9D9D9;';
		div.innerHTML = `
		<div class="grid align-items-center">
			<span class="ava" style="background-image: url(${testimonials.list[i].ava})"></span>
			<span class="text-secondary">${testimonials.list[i].name}</span>
		</div>
		${testimonials.list[i].html}
		`;

		testominalsList.appendChild(div);
	}
	
	return template;
}