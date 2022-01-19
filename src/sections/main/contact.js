/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Text, Box } from 'theme-ui';
import Form from 'components/Form';

const Contact = () => {
  return (
    <section sx={styles.contact} id="contact">
      <Container sx={styles.contact.container}>
        <Box sx={styles.contact.contentBox}>
          <Heading as="h2" variant="heroPrimary" sx={styles.contact.title1}>
            Co nas wyróżnia?
          </Heading>
          <Text as="p">Klienci wolą nas od innych firm z kilku jasnych powodów:</Text>
          <ul sx={styles.contact.list}>
            <li>doradztwo na każdym etapie,</li>
            <li>bardzo doświadczeni instalatorzy,</li>
            <li>oferujemy tylko sprawdzony sprzęt,</li>
            <li>dbamy o każdy drobiazg,</li>
            <li>ubezpieczenie od odpowiedzialności.</li>
          </ul>
        </Box>
        <Box sx={styles.contact.formContainer}>
          <Heading as="h2" variant="heroPrimary" sx={styles.contact.title1}>
            Napisz do nas
          </Heading>
          <Form />
        </Box>
      </Container>
    </section>
  );
};

export default Contact;

const styles = {
  contact: {
    fontFamily: 'body',
    my: '40px',
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      '@media screen and (max-width: 1024px)': {
        display: 'block',
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        placeItems: 'center',
      },
    },
    title1: {
      color: 'secondary',
    },
    contentBox: {
      color: 'secondary',
    },
    list: {
      li: {
        my: 15,
      },
    },
    formContainer: {
      display: 'flex',
      justifySelf: 'end',
      flexDirection: 'column',
      '@media screen and (max-width: 1024px)': {
        justifySelf: 'start',
        my: 40,
      },
    },
  },
};
