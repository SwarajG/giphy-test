export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
    const context = this;
    const args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export async function getObjectUrlFromUrl(url) {
	const response = await fetch(url);
	const blob = await response.blob();
	// const objectUrl = URL.createObjectURL(blob);
	return blob;
}