import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <ToastContainer>
      position= "bottom-right"
      autoclose= (2000)
      limit= (1)
      hideProgressBar= (false)
      newestOnTop= (false)
      closeOnclick
      rtl= (false)
      pauseOnfocusLoss
      draggable
      pauseOnMover= (false)
      theme= "dark"
    </ToastContainer>
  </StrictMode>
);
