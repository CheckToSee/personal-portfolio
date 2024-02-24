export const slideIn = (type, delay, duration) => ({
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
    },
  },
});
