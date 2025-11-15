const toggle = document.getElementById('darkModeToggle');

// Check saved mode in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️'; 
} else {
    toggle.textContent = '🌙'; 
}

// Toggle dark mode on click
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggle.textContent = '☀️'; 
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggle.textContent = '🌙'; 
    }
});
