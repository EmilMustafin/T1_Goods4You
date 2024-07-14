import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AppLoader } from './app-loader';
import { appRouter } from './app-router';
import { store } from './app-store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppLoader>
        <RouterProvider router={appRouter} />
      </AppLoader>
    </Provider>
  </StrictMode>,
);
