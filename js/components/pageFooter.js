export default async function pageFooter() {
	let marqueeText = '';
	for (let i = 0; i <= 9; i ++) {
		marqueeText += '<span class="text-uppercase">SmartOutsourcing</span>';
	}
	
	const template = document.createElement('footer');
	template.classList.add('page-footer');
	template.innerHTML = `
	<div class="container">
		<form class="form" action="https://api.web3forms.com/submit" method="POST">
			<h4>Leave a request and we will contact you as soon as possible</h4>
			<input type="hidden" name="access_key" value="15af19a1-cb75-40bc-91fc-91e54fcc7a1d">
			<input type="checkbox" name="botcheck" class="hidden" style="display: none;">
			<div class="grid grid-sm-2">
				<div>
					<span class="label required">Name</span>
					<input class="input" type="text" class="input" name="name" placeholder="Your full name" required>
				</div>
				<div>
					<span class="label required">Phone</span>
					<input class="input" type="text" class="input" name="phone" placeholder="Your phone number" required>
				</div>
			</div>
			<div class="grid grid-sm-2">
				<div>
					<span class="label required">Company name</span>
					<input class="input" type="text" class="input" name="company_name" placeholder="Your company name" required>
				</div>
				<div>
					<span class="label required">Email</span>
					<input class="input" type="text" class="input" name="email" placeholder="Your email" required>
				</div>
			</div>
			<div class="mb-40">
				<span class="label">What specialist are you looking for?</span>
				<input class="input" type="text" class="input" name="note" placeholder="Describe the specialist you need">
			</div>
			<button type="submit" class="btn btn-outline">Request a quote</button>
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
				<h4>+4420 8301 2442</h4>
				<p class="mb-8">Email us at</p>
				<h4>info@smartoutsourcing.co.uk</h4>
				<p class="mb-40"><b>Offices</b></p>
				<div class="grid grid-md-2 gap-40">
					<p>
						<b class="d-block mb-8">Head office</b>
						<span>133 Creek Road, London SE8 3BU</span>
					</p>
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
		<div>${marqueeText}</div>
	</div>
	`;
	
	return template;
}