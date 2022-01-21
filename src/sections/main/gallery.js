/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Text, Box, Button, Grid } from 'theme-ui';
import { Link } from 'components/Link';
import Fade from 'react-reveal/Fade';
import GalleryImg01 from 'assets/gallery01.png';
import GalleryImg02 from 'assets/gallery02.png';
import GalleryImg03 from 'assets/gallery03.png';
import GalleryImg04 from 'assets/gallery04.png';

const Gallery = () => {
  return (
    <section sx={styles.gallery} id="gallery">
      <Container sx={styles.gallery.container}>
        <Fade left>
          <Box sx={styles.gallery.boxContent}>
            <Heading as="h2" variant="heroPrimary">
              Galeria
            </Heading>
            <Text as="p" variant="heroSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum viverra tellus
              sapien.
            </Text>
            <Link path="/gallery">
              <Button variant="green">Przejdź do galerii</Button>
            </Link>
          </Box>
        </Fade>
        <Fade right>
          <Grid sx={styles.gallery.gridContainer}>
            <Box sx={styles.gallery.img01} />
            <Box sx={styles.gallery.img02} />
            <Box sx={styles.gallery.img03} />
            <Box sx={styles.gallery.img04} />
          </Grid>
        </Fade>
      </Container>
    </section>
  );
};

export default Gallery;

const styles = {
  gallery: {
    backgroundColor: 'secondary',
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 40,
    },
    boxContent: {
      width: 450,
      '@media screen and (max-width: 1130px)': {
        width: 400,
        mr: 20,
      },
      '@media screen and (max-width: 940px)': {
        width: '100%',
      },
    },
    gridContainer: {
      gridTemplateColumns: '250px 250px 250px',
      gridTemplateRows: '250px 250px',
      gap: 10,
      '@media screen and (max-width: 1300px)': {
        gridTemplateColumns: '200px 200px 200px',
        gridTemplateRows: '200px 200px',
      },
      '@media screen and (max-width: 1130px)': {
        gridTemplateColumns: '150px 150px 150px',
        gridTemplateRows: '150px 150px',
      },
      '@media screen and (max-width: 940px)': {
        display: 'none',
      },
    },
    img01: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      backgroundImage: `url(${GalleryImg01})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    img02: {
      gridRow: '1 / span 2',
      gridColumn: 3,
      backgroundImage: `url(${GalleryImg02})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    img03: {
      backgroundImage: `url(${GalleryImg03})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    img04: {
      backgroundImage: `url(${GalleryImg04})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
};
