AOS.init();
const template = document.body;

const app = {
	pages: {
		common: {
			menu() {
				let pageHeader = template.querySelector('.page-header');
				let navTrigger = pageHeader.querySelector('.nav-trigger');
				let navClose = pageHeader.querySelector('.nav-close');
				let mainNav = pageHeader.querySelector('nav');

				navTrigger.addEventListener('click', () => {
					mainNav.classList.add('show');
					template.classList.add('overflow-hidden');
				});
				
				navClose.addEventListener('click', () => {
					mainNav.classList.remove('show');
					template.classList.remove('overflow-hidden');
				});
			},
			load() {
				this.menu();
			}
		},
		home() {
			const homePage = template.querySelector('.home-page');
			if (!homePage) return false;
			const services = [
				{id: 1, name: 'Accountancy Service', image: 'images/s1.png'},
				{id: 2, name: 'Media Agency', image: 'images/s2.png'},
				{id: 3, name: 'Product Design', image: 'images/s3.png'},
				{id: 4, name: 'Software Development', image: 'images/s4.png'},
			];
			
			let servicesList = homePage.querySelector('.services .list .grid');
			let cta = document.createElement('div');
			cta.classList.add('cta');
			cta.innerHTML = `
			<div>
				<p class="mb-8">Which<br>specialist<br>do you need?</p>
				<span class="d-block mb-40">Leave a request and we’ll be<br>in touch with you as soon<br>as possible</span>
				<a href="#" class="btn btn-outline" data-aos="fade-up" data-aos-duration="500">Request a quote</a>
			</div>
			`;
			
			for (let i in services) {
				let figure = document.createElement('figure');
				
				figure.innerHTML = `
				<div class="image" style="background-image: url(${services[i].image})"></div>
				<figcaption>
					<span class="text-right">0${parseInt(i) + 1}</span>
					<h3>${services[i].name}</h3>
				</figcaption>
				`;
				
				servicesList.appendChild(figure);
			}
			
			servicesList.insertBefore(document.createElement('div'), servicesList.children[2]);
			servicesList.insertBefore(cta, servicesList.children[4]);
			
			const testimonials = [
				{id: 1, name: 'Testominal 1', ava: 'images/testimonials/a1.png', html: `<p>"Working with <span style="color: #1778F2">Smart Outsourcing</span> has been a game-changer for our business. Their back-office support allowed us to focus on strategic growth while knowing our daily operations were in expert hands."</p>`},
				{id: 2, name: 'Testominal 2', ava: 'images/testimonials/a2.png', html: `<p>"The quality and professionalism of their customer service team have exceeded our expectations. They’ve helped us build stronger relationships with our clients and improved our overall customer satisfaction ratings."</p>`},
				{id: 3, name: 'Testominal 3', ava: 'images/testimonials/a3.png', html: `<p>“The customer service support we’ve received has been phenomenal. Our clients are happier, and our business runs smoother.”</p>`},
				{id: 4, name: 'Testominal 4', ava: 'images/testimonials/a4.png', html: `<p>"Thanks to <span style="color: #1778F2">Smart Outsourcing</span>'s digital marketing expertise, our online visibility has skyrocketed. We’ve seen a 45% increase in website traffic and a significant boost in sales."</p>`},
				{id: 5, name: 'Testominal 5', ava: 'images/testimonials/a5.png', html: `<p>"Outsourcing our graphic design needs to <span style="color: #1778F2">Smart Outsourcing</span> was the best decision we made. The designs are creative, on-brand, and always delivered on time."</p>`},
				{id: 6, name: 'Testominal 6', ava: 'images/testimonials/a6.png', html: `<p>"Partnering with <span style="color: #1778F2">Smart Outsourcing</span>. Their team is professional, efficient, and always delivers beyond expectations."</p>`},
			];
			
			let testominalsList = homePage.querySelector('.testimonial .grid');
			
			for (let i in testimonials) {
				let div = document.createElement('div');
				div.classList.add('item');
				if (i == 0) div.style.cssText = 'border-radius: 28px 0 0 0';
				if (i == 1) div.style.cssText = 'border-radius: 0 28px 0 0';
				if (i == testimonials.length - 1) div.style.cssText = 'border-radius: 0 0 28px 0; border-bottom: 1px solid #D9D9D9;';
				if (i == testimonials.length - 2) div.style.cssText = 'border-radius: 0 0 0 28px; border-bottom: 1px solid #D9D9D9;';
				div.innerHTML = `
				<div class="grid align-items-center">
					<span class="ava" style="background-image: url(${testimonials[i].ava})"></span>
					<span class="text-secondary">${testimonials[i].name}</span>
				</div>
				${testimonials[i].html}
				`;
				
				testominalsList.appendChild(div);
			}
		},
		load() {
			this.home();
			this.common.load();
		}
	},
	init() {
		this.pages.load();
	}
}

app.init();