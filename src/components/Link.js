/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
// import NextLink from 'next/link';
import { string, node } from 'prop-types';

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
}

Link.propTypes = {
  path: string,
  label: string,
  children: node,
};

NavLink.propTypes = {
  path: string,
  label: string,
  children: node,
};
