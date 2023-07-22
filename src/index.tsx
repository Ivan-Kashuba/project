import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import ErrorBoundary from './app/providers/ErrorBoundary/ui/ErrorBoundary';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
