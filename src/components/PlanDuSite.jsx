import React from 'react';
import './PlanDuSite.css';

const PlanDuSite = ({ onNavigate }) => {
    const sitemapLinks = [
        { label: 'Accueil', target: 'home' },
        { label: 'Présentation', target: 'home', section: 'presentation' },
        { label: 'Nos missions', target: 'home', section: 'missions' },
        { label: 'Nos services', target: 'home', section: 'services' },
        { label: 'Particuliers', target: 'home', section: 'particuliers' },
        { label: 'Contact', target: 'home', section: 'contact' },
        { label: 'Mentions légales', target: 'mentions' },
        { label: 'Plan du site', target: 'sitemap' },
    ];

    return (
        <div className="sitemap-page">
            <div className="sitemap-banner">
                <div className="container">
                    <h1>Plan du site</h1>
                    <div className="breadcrumbs">
                        <span onClick={() => onNavigate('home')} className="breadcrumb-link">Accueil</span> / Plan du site
                    </div>
                </div>
            </div>

            <main className="sitemap-content">
                <div className="container">
                    <section className="sitemap-info">
                        <h2>Eden France Consulting</h2>
                        <p className="subtitle">Prestations Administratives & Comptables</p>
                        <p className="subtitle">Conseil . Assistance . Diagnostic . Accompagnement TPE / PME</p>

                        <ul className="sitemap-list">
                            {sitemapLinks.map((link, index) => (
                                <li key={index} onClick={() => onNavigate(link.target, link.section)}>
                                    <span className="arrow">›</span> {link.label}
                                </li>
                            ))}
                        </ul>

                        <div className="back-button-container">
                            <button onClick={() => onNavigate('home')} className="back-home-btn">Retour à notre page accueil</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PlanDuSite;
