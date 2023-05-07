import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import RootBoundary from '@/pages/RootBoundary';
import queryClient, { QueryClientProvider } from '@/query';
import { BrowserRouter as RootRouter } from 'chimplanet-ui';
import AppContextProvider from './context';
import { PreloadProvider } from './context/preloadContext';
import './assets/fonts/pretendard/pretendard.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PreloadProvider>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RootRouter /* basename={BASE_NAME} */>
          <RootBoundary>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </RootBoundary>
        </RootRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </PreloadProvider>,
);
