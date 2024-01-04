import Nav from '../../components/Nav';
import React from 'react';

const Layout = ({
  foo,
  bar,
}: {
  foo: React.ReactNode;
  bar: React.ReactNode;
}) => {
  return (
    <>
      <Nav />
      <>{foo}</>
      <>{bar}</>
    </>
  );
};

export default Layout;
