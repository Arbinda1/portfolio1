// Function to apply styles dynamically to elements
function applyStyles() {
    const profileImages = document.querySelectorAll('.profile img');
  
    // Apply a rotation transform on profile images on hover
    profileImages.forEach((image) => {
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'rotate(360deg)';
      });
  
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotate(0)';
      });
    });
  
    const projectLinks = document.querySelectorAll('.project');
  
    // Apply a translation transform on project links on hover
    projectLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px)';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Call the function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', applyStyles);
  