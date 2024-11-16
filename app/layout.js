import {Cormorant} from  'next/font/google'
import {Montserrat} from  'next/font/google'
import "./globals.scss";

const cormorant = Cormorant({
  subsets: ['cyrillic'],
  variable: "--font-cormorant",
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat ({
  subsets: ['cyrillic'],
  variable: "--font-montserrat",
  weight: ['400', '500', '600', '700','800'],
});


export const metadata = {
  title: "Med-Fast-Clinic",
  description: "Med-Fast-Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.className} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
