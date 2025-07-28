import { createRoot } from 'react-dom/client';
import './css/reset.css';
import './css/default.css';
import './css/eha.css';
import './css/header.css';
import './css/style.css';
import './css/roadmap-inline.css';
import './css/homeTitle.css';
// Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
