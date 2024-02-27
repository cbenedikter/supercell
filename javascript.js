
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

// OneSignal consol log : Show subscriber status

  OneSignal.push(function () {
    var isPushSupported = OneSignal.isPushNotificationsSupported();
    console.log("Push Supported on Browser: ", isPushSupported);
    OneSignal.isPushNotificationsEnabled(function (isEnabled) {
      if (isEnabled) {
        console.log("Push notifications are enabled!");
        OneSignal.getUserId(function (userId) {
          console.log("OneSignal Push User ID:", userId);
        });
        OneSignal.getEmailId(function (emailId) {
          console.log("OneSignal Email User ID:", emailId)
        })
        OneSignal.getExternalUserId().then(function(externalUserId){
          if (externalUserId == null){
            var anonUserId = Math.floor(1000000000 + Math.random() * 9000000000);
            console.log("externalUserId: ", anonUserId);
            OneSignal.setExternalUserId(anonUserId);
          } else {
            console.log("externalUserId: ", externalUserId);
          }
        });
      }
      else
        console.log("Push notifications are not enabled yet.");
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



const purchaseButton = document.getElementById("checkout");

// Check if the element exists
if (purchaseButton) {
  // Add a click event listener to the element
  purchaseButton.addEventListener("click", function() {
    // Code to be executed when the button is clicked
    console.log("Purchase button clicked!");
           OneSignal.sendOutcome("Purchase", 1);
    // Replace this with your desired functionality, like processing a purchase, displaying a confirmation message, etc.
  });
} else {
  console.error("Element with ID 'purchase' not found!");
}


