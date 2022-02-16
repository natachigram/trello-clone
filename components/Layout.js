import { GlobalStyles } from '../styles/theme.config';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
