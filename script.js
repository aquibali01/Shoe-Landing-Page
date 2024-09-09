document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for internal links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Product details popup
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.modal .close');

    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', function () {
            const title = this.querySelector('h3').innerText;
            const description = this.querySelector('p').innerText;
            
            document.getElementById('productTitle').innerText = title;
            document.getElementById('productDescription').innerText = description;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Form validation
    document.querySelector('form').addEventListener('submit', function (e) {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
