import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import './App.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
