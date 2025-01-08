
function showSection(sectionId) {
    
    document.querySelectorAll("div[id]").forEach((section) => {
      section.style.display = "none";
    });
  
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = "block";
    }
  }