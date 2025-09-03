
    // Initialize icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      document.getElementById('year').textContent = new Date().getFullYear();
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Theme toggle with persistence
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const userPref = localStorage.getItem('theme');

    const setTheme = (mode) => {
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
      } else {
        document.documentElement.classList.remove('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
      }
      if (window.lucide) lucide.createIcons();
      localStorage.setItem('theme', mode);
    };

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPref || (systemDark ? 'dark' : 'light'));

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  