// Sample data for bags
let bags = [
    {
        id: 1,
        name: "Stylish Tote Bag",
        price: 1200,
        image: "./assets/WhatsApp Image 2024-10-17 at 12.19.15.jpeg",
        description: "A versatile tote bag perfect for everyday use. Made from high-quality materials."
    },
    {
        id: 2,
        name: "Elegant Handbag",
        price: 500,
        image: "./assets/WhatsApp Image 2024-10-17 at 12.19.14.jpeg",
        description: "An elegant handbag for special occasions, featuring intricate detailing."
    },
    // Add more bag items here
];

// Function to display bags on the page
function displayBags() {
    const bagsContainer = document.getElementById('bags-app').getElementsByClassName('row')[0];
    bagsContainer.innerHTML = '';

    bags.forEach(bag => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card bag-card">
                <img src="${bag.image}" class="card-img-top" alt="${bag.name}">
                <div class="card-body">
                    <h5 class="card-title">${bag.name}</h5>
                    <p class="card-text">${bag.description}</p>
                    <button class="btn btn-primary">$${bag.price}</button>
                    <button class="btn btn-primary" onclick="showReviewModal('${bag.name}')">Buy</button>
                    <button class="btn btn-danger" onclick="deleteBag(${bag.id})">Delete</button>
                </div>
            </div>
        `;
        bagsContainer.appendChild(card);
    });
}

// Function to show the Sign-Up modal
function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close the Sign-Up modal
function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Function to show the Review modal
function showReviewModal(bagName) {
    document.getElementById('bagName').innerText = bagName;
    document.getElementById('reviewModal').style.display = 'block';
}

// Function to close the Review modal
function closeModal() {
    document.getElementById('reviewModal').style.display = 'none';
}

// Function to add a new bag
function addBag(name, price, image, description) {
    const newBag = {
        id: bags.length + 1,
        name,
        price: parseFloat(price),
        image,
        description
    };
    bags.push(newBag);
    displayBags();
}

// Function to delete a bag
function deleteBag(id) {
    bags = bags.filter(bag => bag.id !== id);
    displayBags();
}

// Function to handle the review form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your review!');
    closeModal();
});

// Function to handle the signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up!');
    closeSignupModal();
});

// Function to add an item to the cart
function addToCart() {
    const product = document.getElementById('product').value;
    const machinery = document.getElementById('machinery').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    if (product && machinery && quantity && price) {
        alert(`${quantity} x ${product} has been added to your cart at $${price} each.`);
        document.getElementById('postForm').reset();
    } else {
        alert('Please fill all fields.');
    }
}

// Initial call to display bags
displayBags();
