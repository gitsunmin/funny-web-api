const box = document.querySelector('.box');
const output = document.querySelector('.output');

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: 'block',
});

box.animate(
  {
    rotate: ['0deg', '3600deg'],
    left: ['0%', '100%'],
  },
  {
    timeline,
    duration: 10000,
  }
);

output.textContent = `Timeline source element: ${timeline.source.nodeName}. Timeline scroll axis: ${timeline.axis}`;
