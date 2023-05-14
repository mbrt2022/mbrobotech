/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { string } from 'prop-types';
import Logo from 'components/Logo';
import menuItems from './header.data';
import logo from 'assets/logo.png';
import useMediaQuery from 'hooks/useMediaQuery';

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  const barStyles = {
    bar1: {
      transform: isOpen && 'rotate(-45deg) translate(-4px, 8px)',
    },
    bar2: {
      opacity: isOpen && 0,
    },
    bar3: {
      transform: isOpen && 'rotate(45deg) translate(-3px, -8px)',
    },
  };

  const navStyles = {
    left: isOpen ? '0%' : '-100%',
    backgroundColor: isOpen && isMobile ? '#000' : 'transparent',
  };

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={logo} />
        <Flex as="nav" sx={styles.nav} style={navStyles}>
          {menuItems.map(({ path, label }, index) => (
            <ScrollLink
              key={index}
              activeClass="active"
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={menuToggle}
            >
              {label}
            </ScrollLink>
          ))}
        </Flex>

        <div sx={styles.hamburger} onClick={menuToggle}>
          <div sx={styles.hamburger.bar} style={barStyles.bar1}></div>
          <div sx={styles.hamburger.bar} style={barStyles.bar2}></div>
          <div sx={styles.hamburger.bar} style={barStyles.bar3}></div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  className: string,
};

export default Header;

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    fontFamily: 'heading',
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'secondary',
      boxShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',
      py: 3,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    transition: '0.3s',
    opacity: '0.98',
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 3,
      my: 3,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'link',
      },
      '&.active': {
        color: 'link',
      },
    },
    '@media screen and (min-width: 1024px)': {
      display: 'block',
      width: 'auto',
      position: 'static',
      height: 'auto',
      a: {
        my: 0,
      },
    },
  },
  hamburger: {
    display: 'block',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    cursor: 'pointer',
    bar: {
      width: '30px',
      height: '3px',
      backgroundColor: 'text',
      margin: '5px 0',
      transition: '0.4s',
    },
  },
};
