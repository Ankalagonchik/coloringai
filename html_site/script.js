document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a menu item
    window.closeMenu = function() {
      mobileMenu.classList.remove('active');
    };
  }
  
  // Comparison sliders
  const comparisonSliders = document.querySelectorAll('.comparison-slider');
  
  comparisonSliders.forEach(slider => {
    const beforeContainer = slider.querySelector('.comparison-before-container');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;
    
    // Drag start handler
    const startDrag = (e) => {
      isDragging = true;
      e.preventDefault();
    };
    
    // Drag end handler
    const endDrag = () => {
      isDragging = false;
    };
    
    // Drag movement handler
    const drag = (e) => {
      if (!isDragging) return;
      
      let clientX;
      
      // Handle touch screens
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      
      // Get slider coordinates
      const rect = slider.getBoundingClientRect();
      
      // Calculate position as percentage
      let position = (clientX - rect.left) / rect.width;
      
      // Limit position between 0 and 1
      position = Math.max(0, Math.min(1, position));
      
      // Set position
      const percent = position * 100;
      beforeContainer.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
    };
    
    // Add mouse event listeners
    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', drag);
    
    // Add touch event listeners
    handle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', endDrag);
    window.addEventListener('touchmove', drag);
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Account for navbar height
          behavior: 'smooth'
        });
        
        // Close mobile menu
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real project, form data would be sent here
      alert('Thank you for your message! We will get back to you within 24 hours.');
      
      // Clear the form
      contactForm.reset();
    });
  }
  
  // Scroll animation
  function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .process-step, .gallery-item, .pricing-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If element is within visible area
      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('animate-in');
      }
    });
  }
  
  // Add class for CSS animation
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .service-card, .process-step, .gallery-item, .pricing-card, .testimonial-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `, styleSheet.cssRules.length);
  
  // Start animation on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Fixed navigation bar with background change on scroll
  function handleNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(18, 18, 18, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'var(--background-dark)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  }
  
  window.addEventListener('scroll', handleNavbarBackground);
  handleNavbarBackground(); // Initialize
});