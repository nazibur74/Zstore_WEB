document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const mainContent = document.getElementById("main-content");

    sidebarToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("hidden");
        sidebar.classList.toggle("visible");
    });

    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("visible") && !sidebar.contains(e.target)) {
            sidebar.classList.add("hidden");
            sidebar.classList.remove("visible");
        }
    });

    sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales in USD',
            data: [3000, 4000, 5000, 4000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const stockCtx = document.getElementById('stockChart').getContext('2d');
new Chart(stockCtx, {
    type: 'pie',
    data: {
        labels: ['In Stock', 'Sold', 'Returned'],
        datasets: [{
            label: 'Stock Overview',
            data: [200, 150, 50],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

const productSalesCtx = document.getElementById('productSalesChart').getContext('2d');
new Chart(productSalesCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Product Sales',
            data: [500, 700, 800, 600],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const topCustomersCtx = document.getElementById('topCustomersChart').getContext('2d');
new Chart(topCustomersCtx, {
    type: 'doughnut',
    data: {
        labels: ['Customer A', 'Customer B', 'Customer C', 'Customer D'],
        datasets: [{
            label: 'Top Customers',
            data: [1200, 1500, 1100, 1300],
            backgroundColor: ['#FF9F40', '#4BC0C0', '#FF6384', '#36A2EB'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

const addButton = document.getElementById("add-button");
const addDropdown = document.getElementById("add-dropdown");

addButton.addEventListener("click", (e) => {
    e.stopPropagation();
    addDropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => {
    addDropdown.classList.add("hidden");
});

function addProduct() {
    alert("Add Product functionality triggered!");
}

function addSales() {
    alert("Add Sales functionality triggered!");
}

function addSupplier() {
    alert("Add Supplier functionality triggered!");
}

document.addEventListener("scroll", () => {
    const topBar = document.querySelector(".top-bar");
    if (window.scrollY > 0) {
        topBar.classList.add("scrolled");
    } else {
        topBar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    footer.style.opacity = 0;
    footer.style.transition = "opacity 1s ease-in-out";

    window.addEventListener("scroll", () => {
        const triggerHeight = window.innerHeight * 0.8;
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - triggerHeight) {
            footer.style.opacity = 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addProductSection = document.querySelector('.add-product');
    const productsListSection = document.querySelector('.products-list');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(addProductSection);
    observer.observe(productsListSection);
});

function validateLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Both email and password fields are required.');
        return;
    }

    // Optional: Add additional email or password validation here.
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    redirectToDashboard();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function redirectToDashboard() {
    window.location.href = "index.html";
}

function validateRegister() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const termsCheckbox = document.getElementById('termsCheckbox').checked;

    if (!fullName || !email || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!termsCheckbox) {
        alert('You must agree to the Terms & Conditions.');
        return;
    }

    alert('Registration successful!');
    redirectToDashboard();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function redirectToDashboard() {
    window.location.href = "index.html";
}

