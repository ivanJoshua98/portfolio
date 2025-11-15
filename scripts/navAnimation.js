  /*Navigation header animations*/ 
  document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces del header
    const navLinks = document.querySelectorAll('header nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => {
          //l.classList.remove('border-b', 'border-b-white');
          l.classList.remove('underline', 'underline-4px');
        });
        //link.classList.remove('text-primary');
        //link.classList.add('border-b', 'border-b-white');
        link.classList.add('underline', 'underline-4px');
      });
    });
  });