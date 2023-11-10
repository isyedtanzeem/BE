import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import './App.css';


import HMSInvoice from './Pages/HMSInvoice';

function App() {
  return (
    <div className="App">
      <HMSInvoice />

    </div>
  );
}

export default App;
