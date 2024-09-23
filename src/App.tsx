import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  }
]);

const App = () => {
  const [locale, setLocale] = useState(navigator.language);
  setLocale('fr'); // TO BUILD
  return (
    <IntlProvider locale={locale}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
