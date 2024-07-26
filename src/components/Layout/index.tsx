import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="position-relative">
      <Header />
      <main className="min-vh-100">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
