// Handle search functionality
const searchForm = document.getElementById('search-form') as HTMLFormElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;

searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        console.log('Searching for:', query);
        // Implement search logic
        searchInput.value = '';
    }
});

// Cart functionality
let cartItems = 0;
const cartButton = document.getElementById('cart-button') as HTMLButtonElement;
const cartCount = document.querySelector('.cart-count') as HTMLElement;

cartButton?.addEventListener('click', () => {
    console.log('Viewing cart');
    // Implement cart view logic
});

// Update cart count
function updateCart(count: number) {
    cartItems = count;
    cartCount.textContent = count.toString();
}

// Promo banner close
const closeBanner = document.getElementById('close-banner') as HTMLButtonElement;
const promoBanner = closeBanner?.parentElement;

closeBanner?.addEventListener('click', () => {
    promoBanner?.classList.add('hidden');
});

// Initialize cart
updateCart(0);

// Mobile menu toggle (handled by Flowbite)