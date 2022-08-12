import React from 'react';
import { Route, Routes } from 'react-router-dom'


import Home from './Pages/Home';
import JavaScript from './Pages/JavaScript';
import ReactJS from './Pages/React';
import Redux from './Pages/Redux';





function App() {


  return (
    <div className="App">
      <Routes >
        <Route path='/JavaScript' element={<JavaScript />} />
        <Route path='/React' element={<ReactJS />} />
        <Route path='/Redux' element={<Redux />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
