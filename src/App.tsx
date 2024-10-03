import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import messagesFr from './lang/fr.json';
import messagesEn from './lang/en.json';
import { getDefaultLanguage } from './utils/lang'
import Ecole from './components/Ecole/Ecole';
import Travail from './components/Travail/Travail';
import Loisirs from './components/Loisirs/Loisirs';

// Routes de l'application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },{
    path: "/parcours-scolaire",
    element: <Ecole />,
  },{
    path: "/parcours-professionnel",
    element: <Travail />,
  },{
    path: "/loisirs",
    element: <Loisirs />,
  }
]);

// Langues supportées
const messages: { [key: string]: any } = {
  en: messagesEn,
  fr: messagesFr
};

/**
 * Composant parent de l'application
 * 
 * @return l'affichage de l'application
 */
const App = () => {
  const [locale, setLocale] = useState<string>(getDefaultLanguage());
  const handleChangeLanguage = (newLocale: string): void => {
    localStorage.setItem('appLanguage', newLocale);
    setLocale(newLocale);
  }
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout locale={locale} setLocale={handleChangeLanguage}>
        <RouterProvider router={router} />
      </Layout>
    </IntlProvider>
  );
}

export default App;
