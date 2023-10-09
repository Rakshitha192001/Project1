import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from './Components/Home';
import Timer1 from './Components/Timer1';
import Hookcounter from './Components/HookCounter';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Timer1' element={<Timer1 />}></Route>
        <Route path='Hookcounter' element={<Hookcounter/>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;


 



