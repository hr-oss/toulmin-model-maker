function downloadImage() {
	// Select the element you want to capture as an image
	const elementToCapture = document.querySelector("#toulmin-model");
  
	// Create a canvas from the element
	html2canvas(elementToCapture).then(canvas => {
	  // Create a data URL for the canvas content (PNG format by default)
	  const dataURL = canvas.toDataURL("image/png");
  
	  // Create a temporary anchor element to trigger the download
	  const downloadLink = document.createElement("a");
	  downloadLink.href = dataURL;
	  downloadLink.download = "image.png"; // Set the desired file name
	  downloadLink.click();
  
	  // Clean up by removing the temporary canvas
	  document.body.removeChild(canvas);
	});
  }
  

document.addEventListener("DOMContentLoaded", function() {
	// Add an event listener to the "Generate Image" button
	const generateImageBtn = document.getElementById("generateImage");
	generateImageBtn.addEventListener("click", downloadImage);
});


