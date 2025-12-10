document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projects.forEach(project => {
        const category = project.getAttribute('data-category');

        if (filterValue === 'all') {
          // Show all projects except the 'Coming Soon' fullstack placeholder
          if (category === 'fullstack') {
            project.style.display = 'none';
          } else {
            project.style.display = 'flex';
          }
        } else {
          // Standard filtering
          if (category === filterValue) {
            project.style.display = 'flex';
          } else {
            project.style.display = 'none';
          }
        }
      });
    });
  });
});
