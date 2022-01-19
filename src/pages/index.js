import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Banner from 'sections/main/banner';
import AboutUs from 'sections/main/aboutus';
import Offer from 'sections/main/offer';
import Gallery from 'sections/main/gallery';
import Contact from 'sections/main/contact';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="MB Robo-Tech" />
        <Banner />
        <AboutUs />
        <Offer />
        <Gallery />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
