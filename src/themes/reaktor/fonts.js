const fonts = {
  size: {
        /**
         * We currently use '10px' root value expressed in a percentage so it adjusts per user browser setting.
         * For other settings you can easily calculate the needed rem value based on the 10px root value
         * For example: 1.6rem equals 16px
         * @see: http://engageinteractive.co.uk/blog/em-vs-rem-vs-px
         */
    root: '100%',
    body: '16px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '30px',
  },
  lineHeight: {
    body: 1.5,
    s: 1,
    m: 1.5,
  },
  weight: {
    regular: 400,
    bold: 700,
  },
};

const {weight} = fonts;
fonts.type = {
  regular: `font-family: '"jungka", sans-serif'; font-weight: ${weight.regular}; font-style: normal;`,
  regularItalic: `font-family: '"jungka", sans-serif'; font-weight: ${weight.regular}; font-style: italic;`,
  bold: `font-family: '"jungka", sans-serif'; font-weight: ${weight.bold}; font-style: normal; -webkit-font-smoothing: antialiased;`,
};

export default fonts;
