// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e){
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

