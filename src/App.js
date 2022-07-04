import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Movies from './components/Movies'
import Wishlist from './components/Wishlist'
import './App.css'

function App() {
 
  return (
    <div className="main">
      <Router>
      <Header/>
          <Routes>
            <Route path='/' element={<Movies/>}/> 
            <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
