import Navbar from './navigation/navbar';
import Alert from './alert';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Alert />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
