import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import messagesFr from './lang/fr.json';
import messagesEn from './lang/en.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  }
]);

const messages: { [key: string]: any } = {
  en: messagesEn,
  fr: messagesFr
};

const App = () => {
  const [locale, setLocale] = useState('fr');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout locale={locale} setLocale={setLocale}>
        <RouterProvider router={router} />
      </Layout>
    </IntlProvider>
  );
}

export default App;
