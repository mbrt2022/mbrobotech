/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image } from 'theme-ui';
import Fade from 'react-reveal/Fade';
import WorkerImg from 'assets/worker.png';

const AboutUs = () => {
  return (
    <section sx={styles.aboutus} id="about">
      <Container sx={styles.aboutus.container}>
        <Box sx={styles.aboutus.contentBox}>
          <Heading as="h2" variant="heroPrimary">
            O Nas
          </Heading>
          <Text as="p" variant="basic" sx={styles.aboutus.paragrpah}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dui tellus maecenas
            velit nibh egestas facilisis sodales id. Condimentum vitae bibendum justo justo. Magna
            semper auctor urna viverra velit lorem suspendisse pulvinar fermentum. Consequat tellus
            euismod mauris morbi eget.
          </Text>
          <Text as="p" variant="basic" sx={styles.aboutus.paragrpah}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dui tellus maecenas
            velit nibh egestas facilisis sodales id. Condimentum vitae bibendum justo justo. Magna
            semper auctor urna viverra velit lorem suspendisse pulvinar fermentum. Consequat tellus
            euismod mauris morbi eget.
          </Text>
        </Box>

        <Fade right>
          <Box sx={styles.aboutus.imageBox}>
            <Image sx={styles.aboutus.imageBox.image} src={WorkerImg} alt="MB Robo-Tech worker" />
            <div sx={styles.aboutus.imageBox.blackRec} />
          </Box>
        </Fade>
      </Container>
    </section>
  );
};

export default AboutUs;

const styles = {
  aboutus: {
    backgroundColor: 'heading',
    py: 4,
    paragrpah: {
      pb: [4, 4, 5],
    },
    container: {
      display: 'grid',
      gridTemplateColumns: ['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,auto)'],
      gridGap: [50, null, 100],
      alignItems: 'center',
      minHeight: '100vh',
    },
    contentBox: {},
    imageBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      image: {
        zIndex: 1,
      },
      blackRec: {
        width: '50%',
        height: '50%',
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        backgroundColor: 'secondary',
        display: ['none', null, 'block'],
      },
    },
  },
};
