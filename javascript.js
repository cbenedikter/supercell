
const transparencyBtn = document.getElementById('transparencyBtn');
const goldPassLink = document.getElementById('goldPassLink');
const extraImageLink = document.getElementById('extraImageLink');
const popup = document.getElementById('popup');

let transparencyClicked = false;

// Toggle transparency of the button
transparencyBtn.addEventListener('click', () => {
    transparencyClicked = !transparencyClicked;
    transparencyBtn.style.opacity = transparencyClicked ? '0.5' : '1';
});

// Toggle border of the gold pass image when clicked
goldPassLink.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to document
    goldPassLink.classList.toggle('clicked');
    popup.style.display = 'block'; // Show the popup
});

// Toggle border of the extra image when clicked
extraImageLink.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to document
    extraImageLink.classList.toggle('clicked');
    popup.style.display = 'block'; // Show the popup
});

// Close popup when clicked outside of it
document.addEventListener('click', (e) => {
    if (e.target !== popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});

// Add event listeners to handle clicks on Gold Pass Image and Extra Image buttons
document.addEventListener('DOMContentLoaded', () => {
    const goldPassLink = document.getElementById('goldPassLink');
    const extraImageLink = document.getElementById('extraImageLink');

    goldPassLink.addEventListener('click', () => {
        // Store the URL of the Gold Pass Image in local storage
        localStorage.setItem('clickedImage', 'https://imgur.com/ZDlY0oq.jpg');
    });

    extraImageLink.addEventListener('click', () => {
        // Store the URL of the Extra Image in local storage
        localStorage.setItem('clickedImage', 'https://imgur.com/y4nWxfb.jpg');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const clearCartButton = document.querySelector('.clearCart button');
    clearCartButton.addEventListener('click', () => {
        const clickedImageContainer = document.getElementById('clickedImageContainer');
        // Remove the image element from the DOM
        clickedImageContainer.innerHTML = '';
    });
});
