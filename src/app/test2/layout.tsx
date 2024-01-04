import Nav from '../../components/Nav';
import React from 'react';

const Layout = ({
  foo,
  bar,
  a,
  b,
}: {
  foo: React.ReactNode;
  bar: React.ReactNode;
  a: React.ReactNode;
  b: React.ReactNode;
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
