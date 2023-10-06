import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Lista de Artigos',
  description: 'Aplicação lista atigos cientificos de diversos assuntos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
