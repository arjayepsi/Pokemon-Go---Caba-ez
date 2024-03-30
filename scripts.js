// Function to add item to cart
function addToCart(event) {
    const item = event.target.closest('.item');
    const itemId = item.dataset.id;
    const itemName = item.querySelector('h3').textContent;
    const itemDescription = item.querySelector('p').textContent;
    const itemPrice = parseFloat(item.querySelector('span').textContent.slice(1)); // Remove $ sign

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: itemId, name: itemName, description: itemDescription, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to remove item from cart
function removeItemFromCart(event) {
    const itemId = event.target.dataset.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render cart
function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    let totalPrice = 0;

    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price.toFixed(2)}</span>
            <span>Quantity: ${item.quantity}</span>
            <span>Total: $${itemTotal.toFixed(2)}</span>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Function to handle payment
function handlePayment() {
    // Implement your payment process here
    alert('Proceeding to payment...');
    // Redirect to payment page or execute payment logic
}

// Event listener for adding item to cart
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    renderCart();

    document.getElementById('proceedToPayment').addEventListener('click', handlePayment);
});

// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const proceedToPaymentBtn = document.getElementById("proceedToPayment");

    // Add event listener for the "Proceed to Payment" button
    proceedToPaymentBtn.addEventListener("click", function () {
        // Redirect to the payment page
        window.location.href = "payment.html";
    });
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Handle payment logic here

    // Redirect to transactions.html after payment
    window.location.href = "transactions.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');

    // Add event listener for form submission
    paymentForm.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Handle registration logic here

    // Redirect to login.html after registration
    window.location.href = "login.html";
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleSubmit);
    }
});

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Determine which form is being submitted
    const formId = event.target.id;
    
    if (formId === 'loginForm') {
        // Handle login logic here

        // Redirect to profile page after login
        window.location.href = "profile.html";
    } else if (formId === 'paymentForm') {
        // Handle payment logic here

        // Redirect to transactions.html after payment
        window.location.href = "transactions.html";
    } else if (formId === 'registrationForm') {
        // Handle registration logic here

        // Redirect to login.html after registration
        window.location.href = "login.html";
    }
}

// Event listener for form submissions
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleSubmit);
    });
});

// Event listener for the "Proceed to Payment" button
document.addEventListener("DOMContentLoaded", function () {
    const proceedToPaymentBtn = document.getElementById("proceedToPayment");
    if (proceedToPaymentBtn) {
        proceedToPaymentBtn.addEventListener("click", function () {
            // Redirect to the payment page
            window.location.href = "payment.html";
        });
    }
});
