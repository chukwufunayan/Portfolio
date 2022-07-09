function themeDesign() {
  const getThemeDesign = (theme) => ({
    breakpoints: {
      values: {
        mobile: 0,
        phone: 320,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      },
    },
    palette: {
      mode: theme,
      ...(theme === 'light'
        ? {
            primary: {
              main: '#00ba34',
              contrastText: '#E2E8F0',
            },
            secondary: {
              main: '#e92c2c',
            },
            background: {
              default: '#f0e7db',
              paper: 'rgba(239,229,220,0.54)',
            },
            themeButton: {
              main: '#8730C9',
              secondary: 'rgb(94,33,140)',
            },
          }
        : {
            primary: {
              main: '#33C75C',
              contrastText: '#E2E8F0',
            },
            secondary: {
              main: '#ED5656',
            },
            background: {
              default: '#323232',
              paper: '#4242421f',
            },
            themeButton: {
              main: '#ffd33d',
              secondary: 'rgb(178,147,42)',
            },
          }),
    },
    components: {
      MuiPaper: {
        variants: [
          {
            props: { variant: 'glass' },
            style: {
              backgroundColor:
                theme === 'light' ? 'rgba(239,229,220,0.54)' : '#4242421f',
              backdropFilter: 'saturate(200%) blur(30px)',
              boxShadow:
                theme === 'light'
                  ? 'rgb(0 0 0 / 5%) 0rem 0rem 1rem 0rem'
                  : 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
              position: 'relative',
              top: '-35px',
            },
          },
        ],
      },
    },
  });
  return { getThemeDesign };
}
export default themeDesign;
