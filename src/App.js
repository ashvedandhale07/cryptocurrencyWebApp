import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainRoute from './routes/MainRoute';
import CurrencyRoute from './routes/CurrencyRoute';

function App() {

  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' exact element={<MainRoute/>} />
          <Route path='/currency/:id' element={<CurrencyRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
