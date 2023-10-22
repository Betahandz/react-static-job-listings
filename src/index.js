// import react from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import AppProvider from './globals/useContext';

// create a root 
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering
root.render(
    <AppProvider>
        <App />
    </AppProvider>
)