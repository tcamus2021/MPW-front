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
 * @param props propriétés du composant avec comme attributs :
 * - chidren : l'enfant du composant
 * - locale : langue du site
 * - setLocale : fonction permettant le changement de la langue
 * @return affichage de l'englobant du site
 */
const Layout = ({ children, locale, setLocale }: LayoutProps) => (
    <div className="main-page">
        <Header locale={locale} setLocale={setLocale} />
        <main className="main-page__content">
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;