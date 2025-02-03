const template = document.createElement('div');
template.classList.add('thanks-page');

export async function render() {
	template.innerHTML = `
	<section style="padding: 15% 0; background: url(images/about_bg.png) no-repeat center; background-size: cover;">
		<div class="container text-center">
			<h2 class="mb-18 text-uppercase" style="color: #1778F2;">Thank You for Reaching Out!</h2>
			<p class="mb-40" style="max-width: 567px; margin: 0 auto 40px;">We’ve received your message and appreciate you taking the time to connect with us. Our team will review your inquiry and get back to you shortly. We’re excited to assist you and look forward to helping your business grow!</p>
			<a href="/" class="btn btn-outline">Check more services</a>
		</div>
	<section>
	`;
	
	return template;
}