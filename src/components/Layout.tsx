import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => (
    <div className="main-page">
        <Header />
        <main className="main-page__content">
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;