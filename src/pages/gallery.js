import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/SEO';
import GallerySection from 'sections/gallery-page/GallerySection';
import Footer from 'components/Footer/Footer';

const GalleryPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="MB Robo-Tech" />
      <GallerySection />
      <Footer />
    </ThemeProvider>
  );
};

export default GalleryPage;
