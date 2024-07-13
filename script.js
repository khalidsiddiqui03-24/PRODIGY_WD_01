
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}

function home() {
  window.location.href = '#home';
}

function orderNow() {
  window.location.href = '#order'; // Update with your order section ID or URL
}
function viewMenu() {
  window.location.href = '#menu'; // Update with your menu section ID or URL
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add code to handle form submission, like sending data to a server or displaying a success message
      alert('Message sent successfully!');
      contactForm.reset(); // Reset the form after submission
  });
});
