export default {
  colors: {
    text: '#fff',
    heading: '#0B1F26',
    background: '#fff',
    link: '#EA3A60',
    primary: '#0B1F26',
    secondary: '#000',
    greenBtn: '#2F4F00',
    offerSection: '#DEDEDE',
    input: '#193B47',
    error: 'red',
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: '"Poppins", sans-serif',
    logo: "'Lobster Two', cursive'",
    heading: '"Poppins", sans-serif',
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', '1300px', '1552px'],
      px: 30,
    },
    header: {
      fontWeight: 'normal',
      position: 'absolute',
      width: '100%',
    },
    main: {},
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading',
    },
    heroPrimary: {
      color: 'text',
      fontSize: ['28px', '36px', '42px', '40px', '42px', '52px', '48px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 4],
    },
    heroSecondary: {
      fontFamily: 'heading',
      fontSize: [2, null, null, null, null, '16px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 4,
      color: 'text',
    },
    cardPrimary: {
      fontFamily: 'heading',
      color: 'text',
      fontSize: 28,
      fontWeight: 'bold',
      py: 20,
    },
    basic: {
      fontFamily: 'heading',
      fontSize: 16,
    },
    error: {
      fontSize: 0,
      color: 'error',
    },
  },
  links: {
    default: {
      cursor: 'pointer',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    logo: {
      display: 'flex',
    },
  },
  buttons: {
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 30px', null, '15px 40px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'secondary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      },
    },
    green: {
      variant: 'buttons.defaultBtn',
      borderRadius: 'none',
      color: 'white',
      bg: 'greenBtn',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'secondary',
    },
    input: {
      borderColor: 'primary',
      color: 'secondary',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 1px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'primary',
      color: 'secondary',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 1px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
};
