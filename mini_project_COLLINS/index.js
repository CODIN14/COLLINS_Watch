const productDescriptions = {
    "Collins Submariner": `The Collins Submariner epitomizes timeless elegance and rugged durability. Designed for underwater exploration, this iconic timepiece boasts water resistance up to 300 meters, making it the ultimate companion for divers and adventurers alike. Crafted from premium materials and engineered with precision, the Submariner features a unidirectional rotating bezel for accurate timing during dives, along with luminescent markers for enhanced visibility in low-light conditions. With its classic design and robust construction, the Collins Submariner is a symbol of sophistication and reliability. Whether you're exploring the depths of the ocean or making a bold statement on land, the Submariner is the perfect blend of form and function.`,
    "Collins Daytona": `The Collins Daytona is a true racing legend, combining speed, performance, and style in one sleek package. Inspired by the adrenaline-fueled world of motorsports, this high-performance timepiece features a chronograph function for precise timekeeping during races, along with a tachymeter bezel for measuring speed. With its cushioned design and responsive movement, the Daytona delivers unparalleled comfort and accuracy on the track and beyond. Whether you're behind the wheel or navigating the urban jungle, the Collins Daytona is the ultimate companion for those who demand nothing but the best. From the racetrack to the boardroom, the Daytona is a symbol of success and achievement, representing the pinnacle of automotive engineering and horological innovation.`,
    "Collins Datejust": `The Collins Datejust is a timeless classic that exudes sophistication and refinement. With its legendary design and precision craftsmanship, this iconic timepiece has stood the test of time and remains a symbol of luxury and elegance. Featuring a retro-inspired dial and high-top construction, the Datejust blends vintage charm with modern sensibility, making it the perfect accessory for any occasion. Whether you're attending a formal event or enjoying a casual outing, the Collins Datejust is sure to make a statement. From the boardroom to the ballroom, the Datejust is a symbol of success and style, representing the perfect balance of tradition and innovation.`,
    "Collins GMT-Master II": `The Collins GMT-Master II is a true adventurer's companion, designed to conquer the skies and explore the world. Boasting a dual-time functionality and bi-color bezel, this iconic timepiece allows wearers to track multiple time zones with ease, making it the ultimate tool for globetrotters and jet setters. Crafted with meticulous attention to detail and utilizing only the finest materials, the GMT-Master II exudes luxury and durability in equal measure. With its unwavering accuracy and enduring allure, the Collins GMT-Master II is the epitome of horological excellence and a symbol of adventure. Whether you're crossing continents or crossing time zones, the GMT-Master II is your passport to a world of exploration and discovery.`,
    "Collins Explorer": `The Collins Explorer is a rugged yet refined timepiece that embodies the spirit of exploration and discovery. Designed for the modern adventurer, this iconic watch features a versatile design and premium materials, making it the perfect companion for any journey. With its classic styling and streetwear appeal, the Explorer is equally at home in the great outdoors or the urban jungle. Whether you're scaling mountain peaks or navigating city streets, the Collins Explorer is built to withstand the demands of your active lifestyle. From the highest peaks to the city streets, the Explorer is your guide to new horizons and endless possibilities.`,
    "Collins Day-Date": `The Collins Day-Date is a symbol of status and sophistication, combining timeless elegance with modern innovation. With its stable and durable construction, this iconic timepiece is designed to withstand the rigors of daily wear while exuding luxury and refinement. Featuring a versatile design and supportive features, the Day-Date is the ultimate expression of high-performance horology. Whether you're closing deals in the boardroom or enjoying leisure time with friends, the Collins Day-Date is sure to make a lasting impression. From the office to the opera, the Day-Date is a symbol of success and style, representing the pinnacle of luxury and craftsmanship.`,
    "Collins Oyster Perpetual": `The Collins Oyster Perpetual is a retro-inspired timepiece that pays homage to the classic designs of yesteryear. With its stylish aesthetic and high-top construction, this iconic watch exudes vintage charm and timeless appeal. Crafted with meticulous attention to detail and utilizing only the finest materials, the Oyster Perpetual is a true collector's item and a symbol of horological heritage. Whether you're a seasoned watch enthusiast or a casual admirer of timeless design, the Collins Oyster Perpetual is sure to capture your imagination. From the boardroom to the ballgame, the Oyster Perpetual is a timeless classic that never goes out of style.`,
    "Collins Air-King": `The Collins Air-King is a tribute to aviation history and a celebration of innovation and adventure. Inspired by the golden age of flight, this iconic timepiece features a sleek and stylish design that pays homage to the brave men and women who conquered the skies. With its breathable construction and lightweight feel, the Air-King is designed for comfort and performance, making it the perfect companion for pilots and enthusiasts alike. Whether you're soaring through the clouds or exploring new horizons, the Collins Air-King is ready to take you on a journey of discovery. From the cockpit to the conference room, the Air-King is a symbol of freedom and exploration, representing the spirit of adventure and discovery.`

};

document.addEventListener('DOMContentLoaded', function () {
    const productImages = document.querySelectorAll('.card .image img');

    productImages.forEach(image => {
        image.addEventListener('click', function() {
            changeAboutImage(image);
        });
    });

    function changeAboutImage(image) {
        const aboutImage = document.getElementById('imagebox');
        const smallImages = document.querySelectorAll('.about_small_image img');

        aboutImage.src = image.src;

        // Loop through small images and update their src attributes
        smallImages.forEach(smallImage => {
            smallImage.src = image.src;
        });
    }
});

function functio(small) {
    var full = document.getElementById("imagebox");
    full.src = small.src;
}


function updateDescription(productName) {
    const description = document.getElementById("description");
    description.innerHTML = `<p>${productDescriptions[productName]}</p>`;
}




let likedItems = [];
const likeButtons = document.querySelectorAll('.small_card .fa-heart');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleLike(button);
    });
});

function toggleLike(button) {
    const card = button.closest('.card');
    const productName = card.querySelector('.products_text h2').textContent;

    const index = likedItems.indexOf(productName);
    if (index === -1) {
        likedItems.push(productName);
        button.style.color = 'pink'; // Change color to pink
    } else {
        likedItems.splice(index, 1);
        button.style.color = 'black'; // Change color back to black
    }

    updateLikedList();
}

function updateLikedList() {
    const likedList = document.getElementById('liked-items');
    likedList.innerHTML = ''; // Clear the existing list

    likedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        likedList.appendChild(listItem);
    });
}

function toggleLikedItems() {
    const likedItemsSection = document.querySelector('.liked-items');

    // Toggle the display property between 'none' and 'block'
    likedItemsSection.style.display = likedItemsSection.style.display === 'none' ? 'block' : 'none';

    // If the section is being displayed, update the liked items list
    if (likedItemsSection.style.display === 'block') {
        updateLikedList();
    }
}



//cart
document.addEventListener('DOMContentLoaded', function () {
    let isCartPanelVisible = false;

    // Event listener for cart icon click
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', toggleCartPanel);

    // Event listener for close button click
    const closeButton = document.getElementById('close-cart');
    closeButton.addEventListener('click', toggleCartPanel);

    // Function to toggle the cart panel
    function toggleCartPanel() {
        const cartPanel = document.getElementById('cart-panel');
        cartPanel.classList.toggle('show');
        isCartPanelVisible = !isCartPanelVisible; // Toggle visibility flag
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            if (button.classList.contains('added-to-cart')) {
                removeItemFromCart(name);
                toggleButton(button);
            } else {
                addItemToCart(name, price);
                toggleButton(button);
            }
        });
    });

    function toggleButton(button) {
        if (button.classList.contains('added-to-cart')) {
            button.textContent = 'Add To Cart';
            button.classList.remove('added-to-cart');

        } else {
            button.textContent = 'Added to Cart';
            button.classList.add('added-to-cart');

        }
    }

    let cartItems = [];
    function addItemToCart(name, price, quantity = 1) {
        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const item = { name, price, quantity };
            cartItems.push(item);
        }
        updateCart();
        console.log(`Added ${quantity} ${name} to cart with price ${price}`);
    }

    function removeItemFromCart(name) {
        const index = cartItems.findIndex(item => item.name === name);
        if (index !== -1) {
            cartItems.splice(index, 1);
        }
        updateCart();
        console.log(`Removed ${name} from cart`);
    }

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear existing items

        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const row = document.createElement('tr');
            const itemTotalPrice = item.price * item.quantity;
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>Rs ${item.price.toFixed(2)}</td>

            `;
            cartItemsContainer.appendChild(row);

            totalPrice += itemTotalPrice;
        });

        const totalBillElement = document.getElementById('total-bill');
        totalBillElement.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;


    }

    function showCartPanel() {
        const cartPanel = document.getElementById('cart-panel');
        cartPanel.classList.add('show');
    }

    function hideCartPanel() {
        const cartPanel = document.getElementById('cart-panel');
        cartPanel.classList.remove('show');
    }

    document.getElementById('close-cart').addEventListener('click', hideCartPanel);
});


//login form

document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.getElementById('userIcon');
    const mySidebar = document.getElementById('mySidebar');
    let isLoggedIn = false;

    userIcon.addEventListener('click', function () {
        if (isLoggedIn) {
            toggleNav(); // Toggle sidebar when user is logged in
        }
    });

    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const username = loginForm.querySelector('.username').value;
        const password = loginForm.querySelector('[name="password"]').value;

        if (username === 'Colin Paul Ebby' && password === 'c') {
            message.textContent = 'Login successful!';
            isLoggedIn = true;
            closeNav(); // Close sidebar after successful login
        } else {
            message.textContent = 'Not registered!';
        }
    });

    // Function to toggle the side panel
    function toggleNav() {
        const sidebarWidth = mySidebar.style.width;
        if (sidebarWidth === '0px' || sidebarWidth === '') {
            openNav(); // Open sidebar if it's closed
        } else {
            closeNav(); // Close sidebar if it's open
        }
    }
});

function openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
}

function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
}
