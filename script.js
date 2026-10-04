// Aryan Kahed portfolio: navigation, theme, project filters, and footer year.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#nav-links');
  const themeButton = document.querySelector('#theme-toggle');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    navigation?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  };
  menuButton?.addEventListener('click', () => {
    const open = navigation?.classList.toggle('open') ?? false;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // Storage can be unavailable when opening a local file or using private browsing.
  try {
    document.body.classList.toggle('dark', localStorage.getItem('theme') === 'dark');
  } catch (_) { /* Keep the default theme when storage is unavailable. */ }
  const updateThemeLabel = () => {
    const dark = document.body.classList.contains('dark');
    themeButton?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton?.setAttribute('aria-pressed', String(dark));
  };
  updateThemeLabel();
  themeButton?.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark');
    updateThemeLabel();
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (_) { /* Theme still works without persistence. */ }
  });

  const filters = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.project-card');
  filters.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      projects.forEach(project => {
        const visible = button.dataset.filter === 'all' || project.dataset.category === button.dataset.filter;
        // An inline display value overrides the original stylesheet's display:flex.
        project.style.display = visible ? '' : 'none';
      });
    });
  });
  document.querySelectorAll('.disabled-link').forEach(link => {
    link.setAttribute('aria-disabled', 'true');
    link.addEventListener('click', event => event.preventDefault());
  });
})();
