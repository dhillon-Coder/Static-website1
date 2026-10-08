const products = [
    {
        name: "Classic Oversized Tee",
        category: "Clothing",
        price: 24.99,
        icon: "👕"
    },
    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 49.99,
        icon: "🎧"
    },
    {
        name: "Minimal Desk Lamp",
        category: "Home",
        price: 34.99,
        icon: "💡"
    },
    {
        name: "Pet Comfort Bed",
        category: "Pets",
        price: 39.99,
        icon: "🐶"
    },
    {
        name: "Smart Watch",
        category: "Electronics",
        price: 59.99,
        icon: "⌚"
    },
    {
        name: "Cotton Hoodie",
        category: "Clothing",
        price: 44.99,
        icon: "🧥"
    },
    {
        name: "Aroma Diffuser",
        category: "Home",
        price: 29.99,
        icon: "🌿"
    },
    {
        name: "Interactive Pet Toy",
        category: "Pets",
        price: 19.99,
        icon: "🐾"
    }
];

let cart = [];

function displayProducts(list = products) {

    const grid = document.getElementById("product-grid");

    grid.innerHTML = "";

    list.forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3>${product.name}</h3>

                <div class="product-price">
                    $${product.price.toFixed(2)}
                </div>

                <button class="add-btn" onclick="addToCart(${index})">
                    Add to Cart
                </button>

            </div>
        `;

        grid.appendChild(card);
    });
}

function filterProducts(category) {

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function showAllProducts() {
    displayProducts();
}

function addToCart(index) {

    const product = products[index];

    cart.push(product);

    updateCartCount();

    alert(`${product.name} added to cart!`);
}

function updateCartCount() {

    document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {

    const modal = document.getElementById("cart-modal");

    modal.style.display = "flex";

    displayCart();
}

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}

function displayCart() {

    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        container.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        totalElement.textContent = "$0.00";

        return;
    }

    cart.forEach((product, index) => {

        total += product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <span>${product.name}</span>

            <strong>
                $${product.price.toFixed(2)}
            </strong>
        `;

        container.appendChild(item);
    });

    totalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(
        "Checkout will be connected to your payment system later."
    );
}

function subscribe(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    alert(`Thanks! ${email} has been subscribed.`);

    document.getElementById("email").value = "";
}

displayProducts();
