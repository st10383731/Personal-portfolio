// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
      });
  });
});

// Scroll Animations
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
      }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Lightbox functionality
const lightboxLinks = document.querySelectorAll('.lightbox');

lightboxLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = link.getAttribute('href');
      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.classList.add('lightbox-overlay');
      lightboxOverlay.innerHTML = `<img src="${imgSrc}" alt="Full-size Image"><span class="close-btn">&times;</span>`;
      document.body.appendChild(lightboxOverlay);

      // Close the lightbox when the user clicks on the overlay
      lightboxOverlay.querySelector('.close-btn').addEventListener('click', () => {
          document.body.removeChild(lightboxOverlay);
      });
  });
});

// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('show');
}
