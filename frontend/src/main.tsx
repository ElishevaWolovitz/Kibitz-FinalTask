import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import ShmoozerNameProvider from './contexts/ShmoozerNameContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ShmoozerNameProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ShmoozerNameProvider>
    </BrowserRouter>
  </StrictMode>,
)
