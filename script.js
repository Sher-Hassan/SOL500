const headings = document.querySelectorAll('.expandable');

headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const content = heading.nextElementSibling;
    content.classList.toggle('expanded');
  });
});