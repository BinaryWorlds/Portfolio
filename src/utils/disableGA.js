export const disableGA = (isLock = true) => {
  window[`ga-disable-${process.env.REACT_APP_GA_TRACKING_ID}`] = isLock;
};
