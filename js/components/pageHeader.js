import {data} from '../config/services.js';

export default async function pageHeader() {
	const pathname = location.pathname;
	const template = document.createElement('header');
	template.classList.add('page-header');
	template.innerHTML = `
	<div class="container">
		<a href="/" class="logo"><img src="/images/logo.svg" alt="Smart Outsourcing"></a>
		<nav>
			<ul>
				<li><a ${pathname.includes('about') ? `class="active"` : ''} href="/about">About us</a></li>
				<li>
					<a ${pathname.includes('service') ? `class="active"` : ''} href="#">Services</a>
					<ul class="sub-menu">
						<li class="title"><b>Our services</b></li>
						${data.list.map(i => `<li><a href="${i.link}">${i.name}</a><p class="text-secondary">${i.desc}</p></li>`).join('')}
					</ul>
				</li>
				<li><a href="#">Career</a></li>
			</ul>

			<button class="btn nav-close">
				<img src="/images/icons/close.svg">
			</button>
			<a href="mailto:info@smartoutsourcing.co.uk">info@smartoutsourcing.co.uk</a>
		</nav>
		<a href="tel:+442083012442" class="btn btn-outline">Contact us</a>
		<button class="btn nav-trigger">
			<img src="/images/icons/hamburger.svg">
		</button>
	</div>
	`;
	
	let navTrigger = template.querySelector('.nav-trigger');
	let navClose = template.querySelector('.nav-close');
	let mainNav = template.querySelector('nav');
	
	function closeNav() {
		mainNav.classList.remove('show');
		template.classList.remove('overflow-hidden');
	}

	navTrigger.addEventListener('click', () => {
		mainNav.classList.add('show');
		template.classList.add('overflow-hidden');
	});

	navClose.addEventListener('click', () => {
		closeNav();
	});
	
	return template;
}