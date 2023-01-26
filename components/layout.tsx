import Navbar from './navigation/navbar';
import Alert from './alert';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Alert />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
