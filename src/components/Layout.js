/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, Fragment } from 'react';
import { node } from 'prop-types';
import Sticky from 'react-stickynode';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main id="content" sx={{ variant: 'layout.main' }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: node,
};
