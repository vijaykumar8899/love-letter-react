import LoveLetter from './components/LoveLetter/LoveLetter';
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loveletter" element={<LoveLetterWrapper />} />
    </Routes>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Love Letter App</h1>
    </div>
  );
};

const LoveLetterWrapper = () => {
  return <LoveLetter />;
};

export default App;
