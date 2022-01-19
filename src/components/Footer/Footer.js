/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Text, Image } from 'theme-ui';
import { Facebook, Instagram } from 'components/customIcon';
import FooterImgDesktop from 'assets/footer-img-desktop.png';
import FooterImgTablet from 'assets/footer-img-tablet.png';
import FooterImgMobile from 'assets/footer-img-mobile.png';
import useMediaQuery from 'hooks/useMediaQuery';

const Footer = () => {
  const isDesktop = useMediaQuery('(min-width: 1100px)');
  const isTablet = useMediaQuery('(min-width: 560px)');
  const isMobile = useMediaQuery('(min-width: 320px)');
  const currentYear = new Date().getFullYear();

  return (
    <section sx={styles.footer}>
      <Box sx={styles.footer.footerImg}>
        {isDesktop && <Image src={FooterImgDesktop} alt="MB Robo-Tech footer" />}
        {isTablet && !isDesktop && <Image src={FooterImgTablet} alt="MB Robo-Tech footer" />}
        {isMobile && !isTablet && <Image src={FooterImgMobile} alt="MB Robo-Tech footer" />}
      </Box>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.contentBox}>
          <Text as="p">{`© ${currentYear} mb-robo-tech.pl. All rights reserved | Design by val089`}</Text>
          <Box sx={styles.footer.iconsBox}>
            <Facebook fill="#fff" />
            <Instagram fill="#fff" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: 'secondary',
    mt: 100,
    pt: 50,
    fontFamily: 'body',
    position: 'relative',
    footerImg: {
      position: 'absolute',
      top: '-59px',
      right: 0,
    },
    container: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentBox: {
      textAlign: 'center',
      zIndex: 2,
    },
    iconsBox: {
      textAlign: 'center',
      svg: {
        m: 20,
      },
    },
  },
};
