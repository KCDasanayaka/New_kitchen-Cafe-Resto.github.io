let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCartTotal(); 
}

function clearCart() {
    cart = [];
    total = 0;
    updateCartTotal(); 
}

function updateCartTotal() {
    const cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = total.toFixed(2);
}
function checkout() {
    alert("Thank you for your order!");
    cart = [];
    total = 0;
    updateCart();
}
function checkit() {
    alert("Payment type is selected");}
window.onload = function () {
    updateCartTotal(); 
};

const toggleButtons = document.querySelectorAll(".toggleButton");

function toggleText(event) {
    const button = event.target;
    if (button.textContent === "Add to Cart") {
        button.textContent = "Selected";
    } else {
        button.textContent = "Add to Cart";
    }
}

toggleButtons.forEach((button) => {
    button.addEventListener("click", toggleText);
});

const fixedElement = document.querySelector('.cart');
        const headerHeight = document.querySelector('header').offsetHeight;
        const footerHeight = document.querySelector('footer').offsetHeight;

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate the maximum top position
            const maxTop = windowHeight - fixedElement.clientHeight - footerHeight - 300;

            // Hide the element when it reaches the header or footer
            if (scrollPosition < headerHeight || scrollPosition > maxTop) {
                fixedElement.style.opacity = '1';
            } else {
                fixedElement.style.opacity = '1';
            }
        });
        function navigateToNewPage() {
            document.body.classList.add('zoom-in');
            // Optionally, remove the class after a delay to trigger the zoom-in effect again on subsequent page changes
            setTimeout(() => {
                document.body.classList.remove('zoom-in');
            }, 500); // Duration of the transition (in milliseconds)
        }
        function showPopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'flex';
        }
        
        function closePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none';
        }
        
        