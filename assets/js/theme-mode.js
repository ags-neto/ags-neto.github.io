document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-switch');
    if (!toggle) return;
  
    // Obter preferência armazenada ou seguir o sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
    // Aplica o tema inicial
    document.body.classList.add(isDark ? 'dark' : 'light');
    document.body.classList.remove(isDark ? 'light' : 'dark');
    toggle.checked = isDark;
  
    // Alternar tema quando o botão for clicado
    toggle.addEventListener('change', () => {
      const useDark = toggle.checked;
      document.body.classList.add(useDark ? 'dark' : 'light');
      document.body.classList.remove(useDark ? 'light' : 'dark');
      localStorage.setItem('theme', useDark ? 'dark' : 'light');
    });
  });
  