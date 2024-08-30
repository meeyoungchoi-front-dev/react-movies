import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ReactDOM.createRoot를 사용하여 root element 가져오기
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

// root.render 메서드를 사용하여 React 애플리케이션 렌더링
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

// 성능 측정을 위한 reportWebVitals 호출
reportWebVitals();
