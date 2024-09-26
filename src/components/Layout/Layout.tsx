import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children, locale, setLocale }: any) => (
    <div className="main-page">
        <Header locale={locale} setLocale={setLocale} />
        <main className="main-page__content">
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;