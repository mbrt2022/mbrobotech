/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image } from 'theme-ui';
import { Link } from 'components/Link';
import { object } from 'prop-types';

const Logo = ({ src, ...rest }) => {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        cursor: 'pointer',
        display: 'flex',
        fontFamily: 'logo',
      }}
      {...rest}
    >
      <div styles={{ width: 200, height: 80 }}>
        <Image src={src} alt="MB Robo-Tech landing page" />
      </div>
    </Link>
  );
};

Logo.propTypes = {
  src: object,
};

export default Logo;
