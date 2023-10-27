  let currentSection = 1;
  
  window.addEventListener('touchstart', function(e) {
      startX = e.changedTouches[0].clientX;
  });
  
  window.addEventListener('touchend', function(e) {
      const endX = e.changedTouches[0].clientX;
      const deltaX = startX - endX;
      
      if (deltaX > 50 && currentSection < 5) {
          currentSection++;
      } else if (deltaX < -50 && currentSection > 1) {
          currentSection--;
      }
      
      scrollToSection(currentSection);
  });
  
  function scrollToSection(sectionNumber) {
      const sectionId = "section" + sectionNumber;
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
  }