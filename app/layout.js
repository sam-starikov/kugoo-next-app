import './styles/globals.scss';

import { Jost, Roboto } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Kugoo next app',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={jost.className}>
        <div className='wrapper'>{children}</div>
      </body>
    </html>
  );
}
