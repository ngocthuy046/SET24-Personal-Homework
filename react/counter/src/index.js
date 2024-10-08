import { createRoot } from 'react-dom/client';
import App from './App/app';
import './app.css';

const container = document.getElementById('counter');
const root = createRoot(container);
root.render(<App />);