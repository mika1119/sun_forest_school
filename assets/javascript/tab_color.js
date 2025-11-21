document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".tab__label").forEach((label)=>{
    const color = label.dataset.color;
    label.style.setProperty("--color", color);
  });

  document.querySelectorAll(".tab__content").forEach((content)=>{
    const color = content.dataset.color;
    content.style.setProperty("--color", color);
  });
})
 
