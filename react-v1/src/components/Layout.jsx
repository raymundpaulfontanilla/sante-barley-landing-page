import Footer from "../components/shared/Footer";

function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
