import { createRoot } from 'react-dom/client'
import { LayoutProvider } from '../src/contexts/layout';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <LayoutProvider>
    <App />
  </LayoutProvider>
  
)
