import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './app/index';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

const compose = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

root.render(compose);
