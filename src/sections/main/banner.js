/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import BannerImg from 'assets/main_banner.jpg';
import { Facebook, Instagram } from 'components/customIcon';
import Image from 'next/image';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Image src={BannerImg} alt="me" priority layout="fill" objectFit="cover" />
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Pomagamy w upiększeniu Twojego ogrodu
          </Heading>
          <Text as="p" variant="heroSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum viverra tellus
            sapien.
          </Text>
          <ScrollLink to="offer" spy={true} smooth={true} offset={-70} duration={500}>
            <Button variant="primary">OFERTA</Button>
          </ScrollLink>
          <Box sx={styles.banner.iconsBox}>
            <Facebook />
            <Instagram />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: '80px',
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    zIndex: 2,
    // backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    aligItems: 'center',
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      zIndex: 3,
      width: ['100%', '90%', '535px', null, '57%', '60%', '55%', '60%'],
    },
    iconsBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '55%', '60%'],
      svg: {
        mr: 4,
        mt: 4,
      },
    },
  },
};
