import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import DonorPage from './components/DonorPage';
import ShelterPage from './components/ShelterPage';
import ImpactDashboard from './components/ImpactDashboard';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/donor" element={<DonorPage />} />
          <Route path="/shelter" element={<ShelterPage />} />
          <Route path="/impact" element={<ImpactDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to FoodLink</h1>
      <p>Connecting surplus food donors with local shelters to help those in need.</p>
      <nav>
        <ul>
          <li><a href="/donor">I’m a Donor</a></li>
          <li><a href="/shelter">I’m a Shelter</a></li>
          <li><a href="/impact">Impact Dashboard</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
