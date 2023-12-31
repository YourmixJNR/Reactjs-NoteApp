import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Notes from './pages/NotesPage';
import Note from "./pages/NotePage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
