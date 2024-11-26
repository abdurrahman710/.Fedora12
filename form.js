// Handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const form = document.getElementById('paymentForm');
    const paymentMethod = form.querySelector('select[name="payment-method"]').value;
    const name = form.querySelector('input[name="name"]').value;
    const address = form.querySelector('input[name="address"]').value;
    const city = form.querySelector('input[name="city"]').value;
    const postalCode = form.querySelector('input[name="postal-code"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const email = form.querySelector('input[name="email"]').value;

    // You can now send this data to a server for further processing (e.g., payment gateway, database storage)
    // For this example, we'll just show a confirmation message

    // Simulate a confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thank you, ${name}! Your order details have been successfully submitted.`;
    confirmationMessage.classList.remove('hidden');


    function submission(){
        alert("Thank you!!  YOUR ORDER CONFORMED")
    }
    // Optionally, reset the form
    form.reset();
}
function submission(){
    alert("Thank you!!  YOUR ORDER CONFORMED!!  Delivery Guaranteed By 2-3 Days")
}
   
function clearing(){
    alert("Are you sure you want to clear the form? All data will be lost.");
  
}

