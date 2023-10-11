import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jakub Jadczyk',
  description: 'Frontend developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    `${inter.className} text-font bg-body`;
  }
  return (
    <html lang='en'>
      <body
        className={classNames(
          [inter.className], //font
          'text-font bg-body' //Default colors
        )}
      >
        {children}
      </body>
    </html>
  );
}
