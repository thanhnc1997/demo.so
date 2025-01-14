import {data} from './data.js';

export async function render() {
	const template = document.createElement('div');
	template.classList.add('home-page');
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<h1 class="text-uppercase">
				<span>Connecting<br> Worlds</span>
				<span class="d-flex justify-content-center align-items-center">
					<span>Delivering </span>
					<img data-aos="fade-up" data-aos-duration="1000" src="images/group1.png">
					<span>Excellence <img src="images/brush.svg" class="brush"></span>
				</span>
			</h1>
			<p class="text-center text-secondary">Discover cost-effective, scalable, and reliable<br>outsourcing services tailored to your needs</p>
			<figure class="image" style="background-image: url(images/hero.png)"></figure>
		</div>
	</section>
	<section class="about">
		<div class="grid overflow-hidden">
			<figure class="image"><img src="images/about.png" data-aos="fade-right" data-aos-duration="500"></figure>
			<div class="content">
				<h2 class="text-uppercase">
					<span>Driven by</span>
					<span style="color: #1778F2;">innovation <img src="images/hand_draw.svg"></span>
					<span>committed to</span>
					<span style="color: #1778F2;">your success</span>
				</h2>

				<p class="number">1.400+</p>
				<p class="mb-28">Clients Served across various industries</p>
				<p class="text-secondary mb-18" style="max-width: 265px;">
					With years of experience in diverse industries, our team is dedicated to delivering exceptional results
				</p>
				<a href="#" class="btn btn-outline">Request a quote</a>
			</div>
		</div>
	</section>
	<section class="services">
		<div class="container">
			<h4 class="text-uppercase text-secondary small-headline mb-14">Our Services</h4>
			<p class="desc" data-aos="fade-up" data-aos-duration="500">
				Unlock the full potential of your business with our comprehensive outsourcing services designed to streamline your operations
			</p>
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
			<p class="desc position-relative" data-aos="fade-up" data-aos-duration="500">
				See what our partners have to say about 
				their outsourcing experience with us
				<img data-aos="fade-up" data-aos-duration="1000" src="images/group2.png">
			</p>
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
		<a href="#" class="btn btn-outline" data-aos="fade-up" data-aos-duration="500">Request a quote</a>
	</div>
	`;

	for (let i in data.services) {
		let figure = document.createElement('figure');

		figure.innerHTML = `
		<div class="image" style="background-image: url(${data.services[i].image})"></div>
		<figcaption>
			<span class="text-right">0${parseInt(i) + 1}</span>
			<h3>${data.services[i].name}</h3>
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

	for (let i in data.testimonials) {
		let div = document.createElement('div');
		div.classList.add('item');
		if (i == 0) div.style.cssText = 'border-radius: 28px 0 0 0';
		if (i == 1) div.style.cssText = 'border-radius: 0 28px 0 0';
		if (i == data.testimonials.length - 1) div.style.cssText = 'border-radius: 0 0 28px 0 !important; border-bottom: 1px solid #D9D9D9;';
		if (i == data.testimonials.length - 2) div.style.cssText = 'border-radius: 0 0 0 28px !important; border-bottom: 1px solid #D9D9D9;';
		div.innerHTML = `
		<div class="grid align-items-center">
			<span class="ava" style="background-image: url(${data.testimonials[i].ava})"></span>
			<span class="text-secondary">${data.testimonials[i].name}</span>
		</div>
		${data.testimonials[i].html}
		`;

		testominalsList.appendChild(div);
	}
	
	return template;
}