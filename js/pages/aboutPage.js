import {data} from '../config/configAboutPage.js';

const {hero, about, coreValue} = data;
const template = document.createElement('div');
template.classList.add('about-page');

export async function render() {
	let marquee1 = '',
			marquee2 = '';
	
	for (let i = 0; i <= 9; i ++) {
		marquee1 += '<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>';
		marquee2 += '<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>';
	}
	
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<div class="grid gap-24 align-items-center">
				<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="1000">${hero.title}</h2>
				<div class="d-flex">
					<p class="text-secondary">${hero.content}</p>
				</div>
			</div>
			<figure class="image" style="background-image: url(../images/hero2.png)"></figure>
		<div>
	</section>
	<section class="about overflow-hidden">
		<div class="container">
			<div class="grid grid-sm-2 align-items-center">
				<h2 class="text-uppercase" data-aos="fade-up" data-aos-duration="1000">${about.title}</h2>
				<p class="text-secondary">${about.content}</p>
			</div>
			<blockquote class="grid">
				<div class="founder">
					<span class="ava" style="background-image: url(../images/founder.JPG)"></span>
					<span class="d-block">
						<span class="d-block">Founder</span>
						<b>Mr. Duc Nguyen</b>
					</span>
				</div>
				<p>${about.quote}</p>
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
	</section>
	<section class="join-us">
		<div class="container">
			<h4 class="text-uppercase text-secondary small-headline mb-14">Join our family</h4>
			<p class="desc" data-aos="fade-up" data-aos-duration="500">
				Whether you’re looking to streamline operations, reduce costs, or scale your business, <span style="color: #1778F2;">Smart Outsourcing</span> is here to help. Let’s work together to achieve your goals and take your business to new heights.
			</p>
			<a href="mailto:info@smartoutsourcing.co.uk" class="btn btn-outline">Contact us</a>
		</div>
	</section>
	`;
	
	for (let i in coreValue.list) {
		let div = document.createElement('div');
		div.innerHTML = `
		<p class="number">0${parseInt(i) + 1} <img src="${coreValue.list[i].image}"></p>
		<h3>${coreValue.list[i].name}</h3>
		<p class="text-secondary">${coreValue.list[i].desc}</p>
		`;
		
		template.querySelector('.core-value .grid').appendChild(div);
	}
	
	return template;
}