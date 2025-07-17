import { createRoot } from 'react-dom/client';
import './css/reset.css';
import './css/default.css';
import './css/eha.css';
import './css/header.css';
import './css/style.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
