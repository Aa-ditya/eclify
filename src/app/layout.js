// app/layout.js
import './globals.css'; // Optional global styles
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';
import { Navbar } from './_components/Navbar';

export const metadata = {
  title: 'E-Commerce App',
  description: 'An e-commerce app built with Next.js and MUI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' pt-4 px-6'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
