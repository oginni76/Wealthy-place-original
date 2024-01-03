function toggleMenu() {
    const navigation = document.querySelector('.nav');
    navigation.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    // Trigger fade-in effect when the page loads
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 1;
    });
});
