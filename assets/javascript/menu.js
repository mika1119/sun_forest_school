document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("menu-toggle");
  const links = document.querySelectorAll(".menu a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false;
    });
  });
})
 
