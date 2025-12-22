import React from 'react';
import './MentionsLegales.css';

const MentionsLegales = ({ onBackToHome }) => {
    return (
        <div className="mentions-legales-page">
            <div className="mentions-banner">
                <div className="container">
                    <h1>Mentions légales</h1>
                    <div className="breadcrumbs">
                        <span onClick={onBackToHome} className="breadcrumb-link">Accueil</span> / Mentions légales
                    </div>
                </div>
            </div>

            <main className="mentions-content">
                <div className="container">
                    <section className="legal-info">
                        <h2>Eden France Consulting</h2>
                        <p className="subtitle">Prestations Administratives & Comptables</p>
                        <p className="subtitle">Conseil . Assistance . Diagnostic . Accompagnement TPE / PME</p>

                        <div className="content-block">
                            <p>Ce site est édité par la société Eden France Consulting.</p>
                            <p>Le site Internet est la propriété exclusive de la société Eden France Consulting et ne pourra être utilisé sans l'accord explicite écrit ou numérique de ses représentants.</p>
                        </div>

                        <div className="content-block">
                            <h3>Eden France Consulting</h3>
                            <p>1 bis rue des Carrières - 94120 Fontenay sous Bois</p>
                            <p>Tél. : 09 86 65 71 02</p>
                        </div>

                        <div className="content-block">
                            <p>SIRET : 822 698 718 00019</p>
                        </div>

                        <div className="content-block">
                            <h3>Droit d'accès de modification et de suppression :</h3>
                            <p>Conformément à l'article 34 de la loi « Informatique et Libertés » du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression concernant les données qui vous concernent.</p>
                            <p>Vous pouvez exercer ces droits ou demander la radiation de vos informations personnelles en envoyant un email à l'adresse suivante : <a href="mailto:contact@edenfranceconsulting.com">contact@edenfranceconsulting.com</a></p>
                            <p>Vous pouvez également exercer ce droit en nous contactant par courrier postal à l'adresse suivante :</p>
                            <address>
                                Eden France Consulting<br />
                                1 bis rue des Carrières - 94120 Fontenay sous Bois
                            </address>
                        </div>

                        <div className="content-block">
                            <h3>Hébergement et technologies</h3>
                            <p>Le domaine edenfranceconsulting.com est hébergé par la société OVH sur des serveurs localisés en France.</p>
                            <p>Site internet conforme HTML 5, CSS 3</p>
                        </div>

                        <div className="content-block">
                            <h3>Crédit Photos</h3>
                            <p>Photothèques : 123 RF / En libres de droit</p>
                        </div>

                        <div className="back-button-container">
                            <button onClick={onBackToHome} className="back-home-btn">Retour à notre page accueil</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default MentionsLegales;
