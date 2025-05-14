// 1. Event Handling: Button click, hover, keypress, and bonus actions
document.addEventListener('DOMContentLoaded', function() {

    // Button click event
    const interactiveBtn = document.getElementById('interactiveBtn');
    interactiveBtn.addEventListener('click', function() {
        interactiveBtn.textContent = 'You clicked me!';
        interactiveBtn.style.backgroundColor = '#28a745';
    });

    // Hover effect on images
    const images = document.querySelectorAll('#imageGallery img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', function() {
            image.style.transform = '';
        });
    });

    // Keypress detection (for the whole document)
    document.addEventListener('keypress', function(event) {
        console.log(`You pressed the key: ${event.key}`);
    });

    // Bonus: Double-click or long press secret action
    const secretMessage = document.getElementById('secretMessage');
    interactiveBtn.addEventListener('dblclick', function() {
        secretMessage.classList.remove('hidden');
    });

    // 2. Interactive Elements: Tabs and Slideshow
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = document.getElementById(tab.dataset.target);

            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the clicked tab's content
            targetTab.style.display = 'block';

            // Toggle active class
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // 3. Form Validation: Email and password checks
    const userForm = document.getElementById('userForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Email validation
        if (!emailInput.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            passwordError.classList.remove('hidden');
            isValid = false;
        } else {
            passwordError.classList.add('hidden');
        }

        if (isValid) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fix the errors!');
        }
    });

    // Real-time feedback while typing
    emailInput.addEventListener('input', function() {
        emailError.classList.add('hidden');
    });

    passwordInput.addEventListener('input', function() {
        passwordError.classList.add('hidden');
    });

});
