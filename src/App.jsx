import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/starred' element={<Starred/>}/>
      </Route>
      
      <Route path='*' element={'Not found'}/> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
