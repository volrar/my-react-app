import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import AutoArticles from './AutoArticles'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <>
    <AutoArticles />
    <Footer />
  </>
)
