import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import ErrorBoundary from './app/providers/ErrorBoundary/ui/ErrorBoundary';

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
