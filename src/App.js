import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route to='/' element={<Search />} />
        <Route to='/favorites' element={<Favorites />} />

      </Routes>
      {/* <Search /> */}
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
