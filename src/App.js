import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Notes from './pages/Notes';
import Note from "./pages/Note";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
