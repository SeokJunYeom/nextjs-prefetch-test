import React from 'react';
import { headers } from 'next/headers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
