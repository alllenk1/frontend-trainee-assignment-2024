import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/index';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

const compose = (
    <StrictMode>
        <App />
    </StrictMode>
);

root.render(compose);
