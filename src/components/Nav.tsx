'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [started, setStarted] = useState(new Date());
  const [seconds, setSeconds] = useState(0);

  setInterval(() => {
    setSeconds(Math.floor((new Date().getTime() - started.getTime()) / 1000));
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <p style={{ margin: 0 }}>Current pathname: {pathname}</p>
      <p style={{ margin: 0 }}>On mount: {seconds}s</p>
      <Link href={{ pathname: 'test' }}>
        <button style={{ width: '300px', height: '50px', fontSize: '20px' }}>
          Go to /test
        </button>
      </Link>
      <Link href={{ pathname: 'test2' }}>
        <button style={{ width: '300px', height: '50px', fontSize: '20px' }}>
          Go to /test2
        </button>
      </Link>
    </div>
  );
};

export default Nav;
