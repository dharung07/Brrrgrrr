import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './context/context.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersHistory from './components/OrdersHistory.jsx';
import ShowIngredients from './components/ShowIngredients.jsx';

createRoot(document.getElementById('root')).render(
    <GlobalState>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/orders' element={<OrdersHistory />} />
                <Route path='/ingredients' element={<ShowIngredients />} />
            </Routes>
        </BrowserRouter>
    </GlobalState>,
)