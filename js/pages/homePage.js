import {data} from '../config/configHomePage.js';

const {hero, about, services, testimonials} = data;
const template = document.createElement('div');
template.classList.add('home-page');

export async function render() {
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
		</div>
		<div class="splide">
			<div class="splide__arrows splide__arrows--ltr">
				<button
					class="splide__arrow splide__arrow--prev" aria-label="Previous slide" aria-controls="splide01-track">
					<svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 7H1M1 7L7 13M1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				<button
					class="splide__arrow splide__arrow--next" aria-label="Next slide" aria-controls="splide01-track">
					<svg width="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>
			<div class="splide__track">
				<ul class="splide__list">
					<li class="splide__slide">
						<div class="cta">
							<p class="mb-8">Which<br>specialist<br>do you need?</p>
							<span class="d-block mb-40">Leave a request and we’ll be<br>in touch with you as soon<br>as possible</span>
							<a href="mailto:info@smartoutsourcing.co.uk" class="btn btn-outline">Request a quote</a>
						</div>
					</li>
				</ul>
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
	
	for (let i in services.list) {
		let li = document.createElement('li');
		li.classList.add('splide__slide');
		li.innerHTML = `
		<figure>
			<figcaption>
				<span class="text-right">0${parseInt(i) + 1}</span>
				<h3><a href="${services.list[i].link}">${services.list[i].name}</a></h3>
			</figcaption>
			<div class="image" style="background-image: url(${services.list[i].image})"></div>
		</figure>
		`;

		template.querySelector('.services .splide__list').appendChild(li);
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

export async function callback() {
	new Splide('.splide', {
		type: 'loop',
		gap: 0,
		pagination: false,
		mediaQuery: 'min',
		breakpoints: {
			0: {
				perPage: 1,
				padding: {left: 40, right: 40},
			},
			1024: {
				perPage: 3,
				padding: {left: 80, right: 80},
			},
			1600: {
				perPage: 4,
				padding: {left: 120, right: 120},
			},
		},
	}).mount();
}