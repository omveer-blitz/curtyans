export default (hash: string) => {
	if (hash) {
		const element = document.querySelector(hash);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}
	return true;
}
