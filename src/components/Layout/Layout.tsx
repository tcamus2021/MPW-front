import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface LayoutProps {
    children: string | JSX.Element,
    locale: string,
    setLocale(locale: string): void
};

/**
 * Affiche l'englobant du site
 * 
 * @param props propriétés du composant sous le format LayoutProps
 * @return {JSX.Element}
 */
const Layout = ({ children, locale, setLocale }: LayoutProps): JSX.Element => (
    <div className="main-page">
        <Header locale={locale} setLocale={setLocale} />
        <main className="main-page__content">
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;