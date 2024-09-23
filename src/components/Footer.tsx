import FooterCategorie from "../types/FooterCategorie";

const Footer = () => {
    const footerData: FooterCategorie[] = [
        {
            categorieTitle: 'Légalité',
            liens: [
                { text: 'Mention légales', href: '/mention-legales'},
                { text: 'Nous contacter', href: '/contact'},
                { text: 'Cookies', href: '/cookies'}
            ]
        },
        {
            categorieTitle: 'Nous découvrir',
            liens: [
                { text: 'FAQ', href: '/faq'},
                { text: 'Nos partenaires', href: '/partenaires'},
                { text: 'Nous trouver', href: '/localisation'}
            ],
        },
        {
            categorieTitle: 'Nos Ressources',
            liens: [
                { text: 'Nos équipes', href: '/equipes'}
            ]
        }
    ];

    return (
        <footer className="main-page__footer">
            {footerData.map(categorie => (
                <div className="footer-categorie">
                    <h2 className="footer-categorie__title">{categorie.categorieTitle}</h2>
                    <div className="footer-categorie__links">
                        {categorie.liens.map(lien => (
                            <a href={lien.href} className="footer-categorie__link">{lien.text}</a>
                        ))}
                    </div>
                </div>
            ))}
        </footer>
    );
};

export default Footer;