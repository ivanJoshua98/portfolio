  /*Navigation header animations*/ 
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => {
          l.classList.remove('underline', 'underline-4px');
        });
        link.classList.add('underline', 'underline-4px');
      });
    });
    // Navigation header animations intersection observer
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter(entry => entry.isIntersecting);
      if (!visibleSections.length) return;

      const mostVisible = visibleSections.reduce((prev, current) => {
        return current.intersectionRatio > prev.intersectionRatio
          ? current
          : prev;
      });
      const id = mostVisible.target.id;
      navLinks.forEach(link => {
        link.classList.remove('underline', 'underline-4px');
      });
      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('underline', 'underline-4px');
      }
    }, {
      threshold: 0.3
    });
    sections.forEach(section => observer.observe(section));
  });      
    


  