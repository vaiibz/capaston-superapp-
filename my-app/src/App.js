import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Entertainment from "./pages/Entertainment.jsx";
// import Movies from './pages/Movies'
// import Browse from './pages/Browse'
import React from "react";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        {/* <Route path="/movies" element={<Movies/>}/>
        <Route path='/browse' element={<Browse/>}/> */}
      </Routes>
    </>
  );
};

export default App;
