export default async function pageFooter() {
	const template = document.createElement('footer');
	template.classList.add('page-footer');
	template.innerHTML = `
	<div class="container">
		<form>
			<h4>Leave a request and we will contact you as soon as possible</h4>
			<div class="grid grid-sm-2">
				<div>
					<span class="label required">Name</span>
					<input class="input" type="text" class="input" name="full_name" placeholder="Your full name">
				</div>
				<div>
					<span class="label required">Phone</span>
					<input class="input" type="text" class="input" name="phone" placeholder="Your phone number">
				</div>
			</div>
			<div class="grid grid-sm-2">
				<div>
					<span class="label required">Company name</span>
					<input class="input" type="text" class="input" name="company_name" placeholder="Your company name">
				</div>
				<div>
					<span class="label required">Email</span>
					<input class="input" type="text" class="input" name="email" placeholder="Your email">
				</div>
			</div>
			<div class="mb-40">
				<span class="label required">What specialist are you looking for?</span>
				<input class="input" type="text" class="input" name="note" placeholder="Describe the specialist you need">
			</div>
			<button type="button" class="btn btn-outline">Request a quote</button>
		</form>

		<div class="main-footer grid grid-md-2">
			<div class="content left">
				<h3 class="text-uppercase position-relative">
					Let’s start building your <span style="color: #FFFFFF;">success story</span> today 
					<img data-aos="fade-up" data-aos-duration="1000" src="images/group4.png">
				</h3>
				<nav>
					<a href="#"><img src="images/icons/fb.svg"></a>
					<a href="#"><img src="images/icons/linkedin.svg"></a>
					<a href="#"><img src="images/icons/tw.svg"></a>
					<a href="#"><img src="images/icons/insta.svg"></a>
				</nav>
			</div>
			<div class="content right">
				<p class="mb-8">Call us at</p>
				<h4>0985.771.211</h4>
				<p class="mb-8">Email us at</p>
				<h4>info@smartoutsourcing.co.uk</h4>
				<p class="mb-40"><b>Offices</b></p>
				<div class="grid grid-md-2 gap-40">
					<p>
						<b class="d-block mb-8">Hanoi</b>
						<span>9th floor CT1, Thanh Cong ward, Ba Dinh District</span>
					</p>
					<p>
						<b class="d-block mb-8">Ho Chi Minh City</b>
						<span>264 Nguyen Thai Binh, 12 ward, Tan Binh District</span>
					</p>
					<p>
						<b class="d-block mb-8">Da Nang</b>
						<span>03-05 Xuan Tam, Thuan Phuoc ward, Hai Chau District</span>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="marquee">
		<div>
			<span class="text-uppercase">SmartOutsourcing</span>
			<span class="text-uppercase">SmartOutsourcing</span>
			<span class="text-uppercase">SmartOutsourcing</span>
			<span class="text-uppercase">SmartOutsourcing</span>
			<span class="text-uppercase">SmartOutsourcing</span>
		</div>
	</div>
	`;
	
	return template;
}