/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx } from 'theme-ui';
import { Container, Heading, Text } from 'theme-ui';
import { galleryData } from './galleryData';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'components/Link';
import { ArrowIcon } from 'components/customIcon';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section sx={styles.gallerySection}>
      <Container sx={styles.gallerySection.container}>
        <Link path="/" sx={styles.gallerySection.backLink}>
          <ArrowIcon />
          <Text as="p">Powrót do strony głównej</Text>
        </Link>
        <Heading as="h2" variant="heroPrimary" sx={styles.gallerySection.title}>
          Galeria
        </Heading>
        <Gallery photos={galleryData} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={galleryData.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </section>
  );
};

export default GallerySection;

const styles = {
  gallerySection: {
    pt: 50,
    backLink: {
      fontFamily: 'body',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      color: 'secondary',
      '&:hover': {
        color: 'link',
      },
      p: {
        pl: 10,
      },
    },
    container: {},
    title: {
      color: 'secondary',
      mt: 30,
    },
    image: {
      width: 200,
      height: 200,
      cursor: 'zoom-in',
    },
  },
};
