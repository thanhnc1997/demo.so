export default async function pageHeader() {
	const template = document.createElement('header');
	template.classList.add('page-header');
	template.innerHTML = `
	<div class="container">
		<a href="#" class="logo"><img src="images/logo.svg" alt="Smart Outsourcing"></a>
		<nav>
			<ul>
				<li><a href="#">About us</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Career</a></li>
			</ul>

			<button class="btn nav-close">
				<img src="images/icons/close.svg">
			</button>
			<a href="mailto:">info@smartoutsourcing.co.uk</a>
		</nav>
		<a href="#" class="btn btn-outline">Contact us</a>
		<button class="btn nav-trigger">
			<img src="images/icons/hamburger.svg">
		</button>
	</div>
	`;
	
	let navTrigger = template.querySelector('.nav-trigger');
	let navClose = template.querySelector('.nav-close');
	let mainNav = template.querySelector('nav');

	navTrigger.addEventListener('click', () => {
		mainNav.classList.add('show');
		template.classList.add('overflow-hidden');
	});

	navClose.addEventListener('click', () => {
		mainNav.classList.remove('show');
		template.classList.remove('overflow-hidden');
	});
	
	return template;
}