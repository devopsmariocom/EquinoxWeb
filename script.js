// Login Form Handler
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginBtn = document.getElementById('loginBtn');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();
    
    // Disable form and show loading state
    loginBtn.classList.add('loading');
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    
    // Hide any previous error messages
    errorMessage.classList.remove('show');
    
    // Simulate authentication delay
    setTimeout(() => {
        // Always show error (this is a fake login page)
        showErrorMessage('Authentication failed. Invalid credentials.');
        
        // Re-enable form
        loginBtn.classList.remove('loading');
        usernameInput.disabled = false;
        passwordInput.disabled = false;
        
        // Clear password field
        passwordInput.value = '';
        passwordInput.focus();
        
        // Add shake effect to the form
        loginForm.style.animation = 'errorShake 0.5s ease';
        setTimeout(() => {
            loginForm.style.animation = '';
        }, 500);
    }, 1500);
}

function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    // Scroll error into view if needed
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Add visual feedback when typing
const inputs = [usernameInput, passwordInput];
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
        input.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Add glow effect on form focus
loginForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        loginForm.style.boxShadow = 
            '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 60px rgba(0, 255, 255, 0.05)';
        setTimeout(() => {
            loginForm.style.boxShadow = '';
        }, 200);
    }
});

