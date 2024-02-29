// Show console log and remove data tags when Clear Cart button is clicked
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");
    const clearCartButton = document.getElementById('clearCart');
    clearCartButton.addEventListener('click', () => {
        const tags =  ['cart_update' , 'product_name'];
        OneSignal.User.removeTags(tags);
        console.log(tags);
    });
});


// Send a custom outcome to OneSignal when Check out button is clicked
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");
    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', () => {
        OneSignal.Session.sendOutcome("Purchase", 1);
        console.log("Purchase Outcome sent to OneSignal");
    });
});

