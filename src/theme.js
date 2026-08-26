(function () {
    const themeToggle = document.querySelector('#theme-toggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function updateTheme(theme) {
        const isDark = theme === 'dark';
        root.dataset.theme = isDark ? 'dark' : 'light';
        localStorage.setItem('site-theme', isDark ? 'dark' : 'light');

        if (!themeToggle) return;
        themeToggle.innerHTML = isDark
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>';
        themeToggle.setAttribute('aria-label', isDark ? '切換至淺色模式' : '切換至深色模式');
        themeToggle.setAttribute('title', isDark ? '切換至淺色模式' : '切換至深色模式');
    }

    updateTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    themeToggle?.addEventListener('click', function () {
        updateTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
})();