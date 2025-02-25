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
			<div class="list">
				<div class="grid">
					<ul>
						${
						services.list.slice(0, 5).map(i => `
						<li><h3>${i.name}</h3><p>${i.q}</p></li>
						`).join('')
						}
					</ul>
					<figure class="image" style="background-image: url(../images/accountancy.png)"></figure>
					<ul>
						${
						services.list.slice(5).map(i => `
						<li><h3>${i.name}</h3><p>${i.q}</p></li>
						`).join('')
						}
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="about">
		<div class="container">
			<h4 class="text-uppercase small-headline mb-14">Our Services to You</h4>
			<p class="desc position-relative aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
			Feel free to call us anytime for help and advice without worrying about extra charges. Here are some of our services.
			<img data-aos="fade-up" data-aos-duration="800" src="../images/as1.png" class="aos-init aos-animate">
		</p>
		</div>
	</section>
	<section class="services">
		<div class="container">
			<ul class="list">
				${
				services.list.map(i => `
				<li class="service">
					<figure style="background-image: url(${i.image})"></figure>
					<div class="content">
						<h4>0${i.id}. ${i.name}</h4>
						${i.content}
					</div>
				</li>
				`).join('')
				}
			</ul>
		</div>
	</section>
	`;
	
	return template;
}

export async function callback() {
	
}