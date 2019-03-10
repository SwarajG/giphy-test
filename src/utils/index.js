export async function getObjectUrlFromUrl(url) {
	const response = await fetch(url);
	const blob = await response.blob();
	return blob;
}

export function imageLoader(imageId, url, callback) {
	const image = new Image();
	const card = document.getElementById(imageId);
	image.src = url;
	image.onload = function() {
		card.src = image.src;
		callback();
	};
}