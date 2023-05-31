// Smooth scrolling to section when clicking on navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Toggle active class for navigation links on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  let currentActiveIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0) {
      currentActiveIndex = index;
    }
  });

  navLinks.forEach((link, index) => {
    if (index === currentActiveIndex) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get form input values
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    // Perform form validation (you can customize this as needed)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Perform form submission (you can customize this as needed)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form
    contactForm.reset();
  });
});
