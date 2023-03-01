import './App.css';
import { Routes, Route } from 'react-router-dom';
import ApiCall from './apiCall';
import TestPage from './testPage';

function App() {
  return (
    <Routes>
      <Route path='/' element= { <ApiCall /> } /> 
      <Route path='/test' element= { <TestPage /> } /> 

    </Routes>
  );
}

export default App;
