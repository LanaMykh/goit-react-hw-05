import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
