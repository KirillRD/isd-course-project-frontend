import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}
        >
          <Suspense fallback="loading">
            <App />
          </Suspense>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
