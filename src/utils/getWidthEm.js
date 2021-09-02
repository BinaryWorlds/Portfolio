export const getWidthEm = () => {
  const { clientWidth } = document.documentElement;
  const fontSize = parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
  return clientWidth / fontSize;
};
