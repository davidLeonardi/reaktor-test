// Colors defined by brand
const brand = {
  red: '#f54',
  darkGray: '#282828',
};

const theme = {
  white: '#fff',
  black: '#282828',
};

const text = {
  default: brand.darkGray,
  light: '#444',
  lightest: '#999',
};

const colors = {
  ...brand,
  ...theme,
  text,
};

export default colors;
