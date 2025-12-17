import React from 'react';
import './App.css';
import logo from './assets/img/logo-default-white.png';

function App() {
  return (
    <div className="app-container">
      {/* Background with Overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Header */}
      <header className="landing-header animated fadeInDown">
        <div className="logo-container">
          <img src={logo} alt="Eden France Consulting" />
        </div>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#presentation">Présentation</a></li>
            <li className="nav-item"><a href="#missions">Nos Missions</a></li>
            <li className="nav-item"><a href="#services">Nos Services</a></li>
            <li className="nav-item"><a href="#formations">Formations</a></li>
            <li className="nav-item"><a href="#vae">VAE</a></li>
            <li className="nav-item"><a href="#bilan">Bilan de compétences</a></li>
            <li className="nav-item"><a href="#particuliers">Particuliers</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="hero-content animated fadeInUp">
        <h1 className="main-title">Eden France Consulting</h1>
        <div className="services-list">
          <p className="service-item">Formation professionnelle</p>
          <p className="service-item">Prestations Administratives & Comptables</p>
          <p className="service-item">Conseil . Assistance . Diagnostic . Accompagnement</p>
          <p className="service-item">TPE / PME & Particuliers</p>
        </div>
      </main>
    </div>
  );
}

export default App;
