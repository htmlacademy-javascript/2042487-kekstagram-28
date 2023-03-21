const favicon = document.querySelector('link[rel="shortcut icon"]');

document.addEventListener('visibilitychange', () => {
  const hidden = document.hidden;

  favicon.setAttribute(
    'href',`/favicon${hidden ? '-hidden' : ''}.ico`
  );
});

