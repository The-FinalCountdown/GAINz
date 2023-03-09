//import logo from './logo.svg';
import './App.css';
//import LoginSignup from './components/LoginSignup';
import HomePage from './components/HomePage';
import Pull from './components/Pull';
import Push from './components/Push';
import Arms from './components/Arms';
import Legs from './components/Legs';
import FullBody from './components/FullBody';
import JournalEntry from './components/Journal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
  
    <Routes> 
      <Route path='/' element={<HomePage />}/>
      <Route path='/push' element={<Push /> }/>
      <Route path='/pull' element={<Pull /> }/>
      <Route path='/arms' element={<Arms /> }/>
      <Route path='/legs' element={<Legs /> }/>
      <Route path='/fullbody' element={<FullBody /> }/>
      <Route path='/journal' element={<JournalEntry /> }/>


    </Routes>

    </BrowserRouter>

   
  </div>
    
  );
}

export default App;
