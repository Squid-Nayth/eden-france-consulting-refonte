import React from 'react';
import './Rgpd.css';

const Rgpd = ({ onBackToHome }) => {
    return (
        <div className="rgpd-page">
            <div className="rgpd-banner">
                <div className="container">
                    <h1>Protection des données – Le RGPD</h1>
                    <div className="breadcrumbs">
                        <span onClick={onBackToHome} className="breadcrumb-link">Accueil</span> / RGPD
                    </div>
                </div>
            </div>

            <main className="rgpd-content">
                <div className="container">
                    <section className="legal-info">
                        <h2>Eden France Consulting</h2>
                        <p className="subtitle">Organisme de Formation – Formation & Accompagnement VAE</p>
                        <p className="subtitle">Bilan de compétences et prestations diverses</p>

                        <div className="content-block hero-business-info">
                            <h3>SASU « Eden France Consulting »</h3>
                            <p><strong>Adresse siège social :</strong> 1 bis rue des carrières 94 120 Fontenay-sous-Bois</p>
                            <p><strong>Adresse des locaux :</strong> HQ Val de Fontenay – 201, rue Carnot – Péri gare A – Bâtiment A – 94120 Fontenay-sous-Bois</p>
                            <p><strong>SIREN :</strong> 822 698 718</p>
                            <p><strong>N° TVA intracommunautaire :</strong> FR36822698718</p>
                            <p><strong>Email :</strong> <a href="mailto:contact@edenfranceconsulting.com">contact@edenfranceconsulting.com</a></p>
                            <p><strong>Téléphone :</strong> 09 86 65 71 02</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 1. Nature des données collectées</h3>
                            <ul>
                                <li>Identité et coordonnées (nom, prénom, adresse, e-mail, téléphone).</li>
                                <li>Informations professionnelles (poste, entreprise, situation professionnelle).</li>
                                <li>Données nécessaires au suivi de la formation et aux prestations diverses (émargements, évaluations, résultats, attestations).</li>
                                <li>Données de facturation et de paiement.</li>
                                <li>Échanges éventuels avec les financeurs (OPCO, CPF, France Travail et autres).</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 2. Finalités du traitement</h3>
                            <ul>
                                <li>Gérer les inscriptions et le suivi administratif des actions de formation et des prestations diverses.</li>
                                <li>Assurer la gestion pédagogique : convocations, supports, attestations, évaluations, émargements.</li>
                                <li>Garantir la facturation, les échéances des paiements avec un contrôle de cohérence en comptabilité.</li>
                                <li>Respecter les obligations légales spécifiques aux organismes de formation.</li>
                                <li>Répondre aux exigences QUALIOPI et aux demandes des financeurs.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 3. Base légale du traitement</h3>
                            <ul>
                                <li>L’exécution d’un contrat (convention de formation, contrat de prestation, devis accepté).</li>
                                <li>Le respect d’obligations légales relatives à la formation professionnelle et aux diverses prestations relevant de l’activité de la SASU « Eden France Consulting ».</li>
                                <li>L’intérêt légitime de la SASU « Eden France Consulting » pour assurer la qualité du service.</li>
                                <li>Le consentement du client/ou apprenant lorsque cela est requis.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 4. Durée de conservation</h3>
                            <ul>
                                <li>Pièces justificatives liées aux formations : jusqu’à 10 ans.</li>
                                <li>Documents comptables : 10 ans.</li>
                                <li>Données pédagogiques : durée requise pour les contrôles administratifs et financiers.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 5. Partage des données</h3>
                            <ul>
                                <li>Les formateurs intervenant sur la formation.</li>
                                <li>Les financeurs de la formation et autres prestataires (OPCO, France Travail, CPF, entreprises).</li>
                                <li>Les administrations en cas de contrôle (DREETS, organismes certificateurs).</li>
                                <li>Aucune donnée n’est vendue ou transmise à des tiers non autorisés.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 6. Droits des personnes concernées</h3>
                            <ul>
                                <li>Droit d’accès, de rectification et de mise à jour des données.</li>
                                <li>Droit à l’effacement des données lorsque cela est applicable.</li>
                                <li>Droit à la limitation ou à l’opposition au traitement.</li>
                                <li>Droit à la portabilité des données.</li>
                                <li>Droit de retirer son consentement à tout moment.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 7. Sécurité des données</h3>
                            <ul>
                                <li>Mesures techniques et organisationnelles pour garantir la confidentialité.</li>
                                <li>Mesures garantissant l’intégrité, la disponibilité et la protection des données.</li>
                                <li>Engagement à sécuriser l’ensemble des traitements réalisés.</li>
                            </ul>
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

export default Rgpd;
