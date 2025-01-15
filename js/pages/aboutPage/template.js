export async function render() {
	const template = document.createElement('div');
	template.classList.add('about-page');
	template.innerHTML = `
	<h1>About page</h1>
	`;
	
	return template;
}