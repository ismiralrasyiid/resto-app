import ProgressBar from 'progressbar.js';

const media = window.matchMedia('(min-width: 1350px)');
const getStyle = () => {
  if (media.matches) {
    return {
      position: 'fixed',
      top: '0',
      left: 'calc((100vw / 2) - 687px)',
      right: 'calc((100vw / 2) - 687px)',
      zIndex: 11,
    };
  }
  return {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 11,
  };
};

const LineProgressBar = new ProgressBar.Line('body', {
  color: 'skyblue',
  strokeWidth: 0.5,
  duration: 2000,
  svgStyle: getStyle(),
});

export default LineProgressBar;
