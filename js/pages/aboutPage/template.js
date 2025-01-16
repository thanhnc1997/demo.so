export async function render() {
	const template = document.createElement('div');
	template.classList.add('about-page');
	template.innerHTML = `
	<section class="hero">
		<div class="container">
			<div class="grid grid-sm-2 align-items-center">
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
			<div class="grid grid-sm-2">
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
			<div>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #1778F2; opacity: 1;" class="text-uppercase">Core Values</span>
			</div>
		</div>
		<div class="marquee reverse">
			<div>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
				<span style="color: #E1E1E1; opacity: 1;" class="text-uppercase">Core Values</span>
			</div>
		</div>
	</section>
	<section class="core-value">
		<div class="container">
			
		<div>
	</section>
	<section class="join-us">
		<div class="container">
			
		<div>
	</section>
	`;
	
	return template;
}