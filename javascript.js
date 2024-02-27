
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
    console.log("Gold Pass clicked");
       popup.style.display = 'block'; 
   
    const tags = { 
cart_update: Math.floor(Date.now() / 1000),
product_name: "Gold Pass",
 KEY_03: "VALUE_03"
};
OneSignal.User.addTags(tags);

         console.log("Tags Sent: 'cart_update' : " + tags.cart_update + " 'product_name' : " + tags.product_name + " 'KEY_03' : " + tags.KEY_03 );

});


// Toggle border of the extra image when clicked
extraImageLink.addEventListener('click', (e) => {
       e.stopPropagation();
    extraImageLink.classList.toggle('clicked');
    console.log("Chest of Gems clicked");
    popup.style.display = 'block'; 
 
    const tags = { 
cart_update: Math.floor(Date.now() / 1000),
 product_name: "Chest of Gems",
 KEY_03: "VALUE_03"
};
OneSignal.User.addTags(tags);
      console.log("Tags Sent: 'cart_update' : " + tags.cart_update + " 'product_name' : " + tags.product_name + " 'KEY_03' : " + tags.KEY_03 );

});


// Show consol log and remove data tags when Clear Cart button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const clearCartButton = document.getElementById('clearCart button');
    clearCartButton.addEventListener('click', () => {
        console.log("Cart Cleared");
    });
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

