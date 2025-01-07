import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root') as HTMLElement;
root.style.backgroundColor = '#FFFFFF';
root.style.color = '#000000';
root.style.width = '100%';
root.style.height = '100%';

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
