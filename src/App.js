import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Settings from './components/Settings';
import About from './components/About';
import Calculator from './components/Calculator';
import Mail from './components/Mail';
import Vacation from './components/Vacation';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/mail" element={<Mail />} />
                    <Route path="/vacation" element={<Vacation />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
