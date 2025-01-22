export async function render() {
	const template = document.createElement('div');
	template.classList.add('thanks-page');
	template.innerHTML = `
	<section>
		<div class="container text-center">
			<h2 class="mb-18">Thank You for Reaching Out!</h2>
			<p class="mb-40" style="max-width: 320px;">We’ve received your message and appreciate you taking the time to connect with us. Our team will review your inquiry and get back to you shortly. We’re excited to assist you and look forward to helping your business grow!</p>
		</div>
	<section>
	`;
	
	return template;
}