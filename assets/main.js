function downloadImage() {
	html2canvas(document.querySelector("#toulmin-model")).then(canvas => {
		document.body.appendChild(canvas)
	});
}

document.addEventListener("DOMContentLoaded", function() {
	// Add an event listener to the "Generate Image" button
	const generateImageBtn = document.getElementById("generateImage");
	generateImageBtn.addEventListener("click", downloadImage);
});


