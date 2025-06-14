// You can add interactive features later
document.addEventListener('DOMContentLoaded', function() {
  const skillFills = document.querySelectorAll('.skill .fill');

  skillFills.forEach(fill => {
    const progress = fill.getAttribute('data-progress');
    if (progress) {
      fill.style.width = progress + '%';
    }
  });
});

console.log("Portfolio loaded");