document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump
      
      const targetId = this.getAttribute('href').substring(1); // Get target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
      }
  });
});