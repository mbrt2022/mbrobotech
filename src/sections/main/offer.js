/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Text } from 'theme-ui';
import OffersList from 'components/OffersList';

const Offer = () => {
  return (
    <section sx={styles.offer} id="offer">
      <Container sx={styles.offer.container}>
        <Heading as="h2" variant="heroPrimary" sx={styles.offer.title}>
          Oferta
        </Heading>
        <Text as="p" variant="heroSecondary" sx={styles.offer.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum viverra tellus
          sapien.
        </Text>
        <OffersList />
      </Container>
    </section>
  );
};

export default Offer;

const styles = {
  offer: {
    backgroundColor: 'offerSection',
    pb: 5,
    title: {
      color: 'secondary',
      pt: 32,
    },
    description: {
      color: 'secondary',
    },
    container: {
      width: '100%',
      minHeight: '100vh',
    },
  },
};
