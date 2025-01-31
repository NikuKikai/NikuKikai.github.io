'use client';

import LoadingIndicator from '@/src/app/loading';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <LoadingIndicator />
      </body>
    </html>
  );
}
