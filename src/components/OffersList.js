/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Card, Box, Heading, Image } from 'theme-ui';
import Flip from 'react-reveal/Flip';
import OfferImg01 from 'assets/offer01.png';
import OfferImg02 from 'assets/offer02.png';

const offers = [
  {
    id: 1,
    imgSrc: OfferImg01,
    title: 'Offer 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus nec congue amet nisl. Placerat pellentesque iaculis enim leo, felis odio. Odio pharetra, lectus velit adipiscing in ullamcorper etiam. Est, mauris, nibh ullamcorper sem nulla eget.',
  },
  {
    id: 2,
    imgSrc: OfferImg02,
    title: 'Offer 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus nec congue amet nisl. Placerat pellentesque iaculis enim leo, felis odio. Odio pharetra, lectus velit adipiscing in ullamcorper etiam. Est, mauris, nibh ullamcorper sem nulla eget.',
  },
  {
    id: 3,
    imgSrc: OfferImg02,
    title: 'Offer 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus nec congue amet nisl. Placerat pellentesque iaculis enim leo, felis odio. Odio pharetra, lectus velit adipiscing in ullamcorper etiam. Est, mauris, nibh ullamcorper sem nulla eget.',
  },
];

const OffersList = () => {
  return (
    <section sx={styles.wrapper}>
      {offers.map(({ id, imgSrc, title, description }) => (
        <Flip left key={id}>
          <Card sx={styles.offerCard}>
            <Image src={imgSrc} />
            <Box sx={styles.offerCard.contentBox}>
              <Heading as="h3" variant="cardPrimary">
                {title}
              </Heading>
              <Text as="p" variant="basic" sx={styles.offerCard.contentBox.description}>
                {description}
              </Text>
            </Box>
          </Card>
        </Flip>
      ))}
    </section>
  );
};

export default OffersList;

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerCard: {
    backgroundColor: 'primary',
    width: 350,
    contentBox: {
      px: 20,
      description: {
        pb: 30,
      },
    },
    '@media screen and (min-width: 1024px)': {},
  },
};
