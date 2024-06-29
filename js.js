// Function to fetch the image URL from the API and update the HTML <img> element
function fetchAndDisplayImage() {
    // Replace with your actual API endpoint that provides the image URL
    const apiUrl = 'https://dog.ceo/api/breed/Affenpinscher/images/random';
  
    fetch('https://dog.ceo/api/breed/Affenpinscher/images/random')
      .then(response => response.json())
      .then(data => {
        console.log("Image API data:", data);
        // Assuming the image URL is in the 'imageUrl' property of the JSON response
        const imageUrl = data.imageUrl;
  
        // Find the image element by ID and set its src attribute to the fetched image URL
        const imageElement = document.getElementById('imageFromApi');
        imageElement.src = imageUrl;
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
      });
  }
  
  // Call the function to fetch and display the image when the page loads
  document.addEventListener('DOMContentLoaded', fetchAndDisplayImage);