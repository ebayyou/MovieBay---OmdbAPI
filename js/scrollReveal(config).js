let sr = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 1500,
  delay: 300,
  //   reset: true,
});

// > header
sr.reveal('.title-menu', { origin: 'bottom', scale: 0.7 });
sr.reveal('.search-input', { delay: 600 });
sr.reveal('.icon-theme', { delay: 700, origin: 'bottom' });

// > information
sr.reveal('.img-info', { delay: 1000, interval: 600 });
sr.reveal('.title-info', { delay: 1000 });
sr.reveal('.year', { delay: 1100 });
sr.reveal('.ratings', { delay: 1150, origin: 'top' });
sr.reveal('.released', { delay: 1200, origin: 'right' });
sr.reveal('.genre', { delay: 1300 });
sr.reveal('.writer', { delay: 1400 });
sr.reveal('.actors', { delay: 1500 });
sr.reveal('.plot', { delay: 1600 });
