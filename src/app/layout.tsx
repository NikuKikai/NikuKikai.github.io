'use client';

import LoadingIndicator from '@/src/app/loading';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials' />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Sacramento&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <LoadingIndicator />
      </body>
    </html>
  );
}
