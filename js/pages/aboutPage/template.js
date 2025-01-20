import {data} from './data.js';

export async function render() {
	let marquee1 = '',
			marquee2 = '',
			marquee3 = '',
			marquee4 = '';
	
	for (let i = 0; i <= 9; i ++) {
		marquee1 += '<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>';
		marquee2 += '<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>';
		// marquee3 += '<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Join Us</span>';
		// marquee4 += '<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Join Us</span>';
	}
	
	const template = document.createElement('div');
	template.classList.add('about-page');
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<div class="grid grid-sm-2 gap-24 align-items-center">
				<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="1000">Guided by Purpose,<br>Driven by <br><span style="color: #1778F2;">Excellence</span></h2>
				<div class="d-flex">
					<p class="text-secondary">At <span style="color: #1778F2 ">Smart Outsourcing</span>, we specialize in simplifying business operations through world-class outsourcing services. Since our inception, we’ve been dedicated to helping businesses reduce costs, improve efficiency, and focus on their core strengths.</p>
				</div>
			</div>
			<figure class="image" style="background-image: url(images/hero2.png)"></figure>
		<div>
	</section>
	<section class="about overflow-hidden">
		<div class="container">
			<div class="grid grid-sm-2 align-items-center">
				<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="1000">Our Mission <br><span style="color: #1778F2;">and Vision</span></h2>
				<p class="text-secondary">With a global footprint and a team of highly skilled professionals, we take pride in offering innovative solutions tailored to the unique needs of each client. Our mission is to be more than just a service provider we aim to be your trusted partner in growth and success.</p>
			</div>
			<blockquote class="grid">
				<div class="founder">
					<span class="ava" style="background-image: url(images/founder.JPG)"></span>
					<span class="d-block">
						<span class="d-block">Founder</span>
						<b>Mr. Duc Nguyen</b>
					</span>
				</div>
				<p>“Our goal is to empower businesses by delivering reliable, cost-effective, and scalable outsourcing solutions that drive sustainable growth.”</p>
			</blockquote>
		</div>
		
		<div class="marquee">
			<div>${marquee1}</div>
		</div>
		<div class="marquee reverse">
			<div>${marquee2}</div>
		</div>
	</section>
	<section class="core-value overflow-hidden">
		<div class="container">
			<div class="grid">
				
			</div>
		</div>
		<div class="marquee">
			<div>${marquee3}</div>
		</div>
		<div class="marquee reverse">
			<div>${marquee4}</div>
		</div>
	</section>
	<section class="join-us">
		<div class="container">
			<h4 class="text-uppercase text-secondary small-headline mb-14">Join our family</h4>
			<p class="desc" data-aos="fade-up" data-aos-duration="500">
				Whether you’re looking to streamline operations, reduce costs, or scale your business, <span style="color: #1778F2;">Smart Outsourcing</span> is here to help. Let’s work together to achieve your goals and take your business to new heights
			</p>
			<a href="#" class="btn btn-outline">Contact us</a>
		</div>
	</section>
	`;
	
	for (let i in data.coreValues) {
		let div = document.createElement('div');
		div.innerHTML = `
		<p class="number">0${parseInt(i) + 1} <img src="${data.coreValues[i].image}"></p>
		<h3>${data.coreValues[i].name}</h3>
		<p class="text-secondary">${data.coreValues[i].desc}</p>
		`;
		
		template.querySelector('.core-value .grid').appendChild(div);
	}
	
	return template;
}