import React from 'react';
import './Cgu.css';

const Cgu = ({ onBackToHome }) => {
    return (
        <div className="cgu-page">
            <div className="cgu-banner">
                <div className="container">
                    <h1>Conditions Générales d’Utilisation (CGU)</h1>
                    <div className="breadcrumbs">
                        <span onClick={onBackToHome} className="breadcrumb-link">Accueil</span> / CGU
                    </div>
                </div>
            </div>

            <main className="cgu-content">
                <div className="container">
                    <section className="legal-info">
                        <h2>Eden France Consulting</h2>
                        <p className="subtitle">Organisme de Formation – Formation & Accompagnement VAE</p>
                        <p className="subtitle">Bilan de compétences et prestations diverses</p>

                        <div className="content-block hero-business-info">
                            <h3>Informations Éditeur</h3>
                            <p><strong>SITE :</strong> <a href="http://www.edenfranceconsulting.fr" target="_blank" rel="noopener noreferrer">http://www.edenfranceconsulting.fr</a></p>
                            <p><strong>Éditeur du site :</strong> SASU « Eden France Consulting »</p>
                            <p><strong>Adresse siège social :</strong> 1 bis rue des carrières 94 120 Fontenay-sous-Bois</p>
                            <p><strong>Adresse des locaux :</strong> HQ Val de Fontenay – 201, rue Carnot – Péri gare A – Bâtiment A – 94120 Fontenay-sous-Bois</p>
                            <p><strong>SIREN :</strong> 822 698 718</p>
                            <p><strong>N° TVA intracommunautaire :</strong> FR36822698718</p>
                            <p><strong>Email :</strong> <a href="mailto:contact@edenfranceconsulting.com">contact@edenfranceconsulting.com</a></p>
                            <p><strong>Téléphone :</strong> 09 86 65 71 02</p>
                            <p><strong>Directrice de publication :</strong> Mme Férouze MEKSOUD, Présidente de la SASU « Eden France Consulting »</p>
                        </div>

                        <div className="content-block">
                            <h3>Hébergement du site et technologies</h3>
                            <p><strong>Hébergeur :</strong> OVH - 2 rue Kellermann BP 80157 59053 ROUBAIX CEDEX 1</p>
                            <p>SAS au capital de 10 174 560,00 € - RCS LILLE METROPOLE 424 761 419 00045</p>
                            <p>Code APE 2620Z | N°TVA FR22424761419 | SIREN : 424 761 419</p>
                            <p>Le domaine edenfranceconsulting.fr est hébergé par la société OVH sur des serveurs localisés en France.</p>
                            <p>Site internet conforme HTML 5, CSS 3</p>
                            <p><strong>Contact :</strong> <a href="mailto:support@ovh.com">support@ovh.com</a></p>
                        </div>

                        <div className="content-block">
                            <h3>Article 1. Accès au site</h3>
                            <p>Le site est accessible depuis n’importe quel lieu, à toute heure et chaque jour de l’année, sauf en cas d’événement imprévisible, d’interruption liée à la maintenance ou de toute autre situation nécessitant une suspension temporaire.</p>
                            <p>Pour assurer la bonne exploitation du site, la SASU « Eden France Consulting » peut, à tout moment et sans préavis :</p>
                            <ul>
                                <li>Apporter des modifications au site</li>
                                <li>Limiter, interrompre ou suspendre l’accès à tout ou partie des pages</li>
                                <li>Restreindre l’accès à certains utilisateurs ou à certaines sections</li>
                                <li>Retirer toute information pouvant nuire à son fonctionnement ou contrevenant aux lois ou aux règles d’usage en ligne</li>
                                <li>Mettre le site en pause afin d’effectuer des mises à jour.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 2. Contenu du site</h3>
                            <p>Le site a pour vocation de présenter les activités et services proposés par la SASU « Eden France Consulting ».</p>
                            <p>La SASU « Eden France Consulting » se réserve le droit de modifier, compléter ou actualiser l’ensemble des contenus publiés, sans information préalable.</p>
                            <p>Les descriptifs des programmes sont consultables directement en ligne et disponibles au téléchargement en format PDF. Chaque document PDF indique sa date de création ou de mise à jour. Lorsqu’une modification est apportée, la date d’édition est ajustée en conséquence.</p>
                            <p>Les images présentes sur le site ont uniquement une fonction illustrative : elles n’ont aucune valeur contractuelle et n’engagent pas la responsabilité de la SASU « Eden France Consulting ».</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 3. Responsabilité</h3>
                            <p>La SASU « Eden France Consulting » met tout en œuvre pour maintenir le site accessible, sans toutefois garantir l’absence d’interruptions.</p>
                            <p>L’utilisateur est informé que la transmission de données via internet peut être affectée par des aléas techniques indépendants de la SASU « Eden France Consulting » qui déploie les moyens nécessaires pour renforcer la sécurité et la confidentialité des données, sans garantir un résultat absolu.</p>
                            <p>La SASU « Eden France Consulting » ne peut être tenue responsable en cas de dysfonctionnement, panne, ralentissement ou impossibilité d’utiliser le site.</p>
                            <p>L’utilisateur est entièrement responsable de son matériel informatique, de la protection de ses données, et de toute mesure visant à prévenir les risques de virus ou d’intrusions.</p>
                            <p>La SASU « Eden France Consulting » décline toute responsabilité en cas :</p>
                            <ul>
                                <li>D’usage non conforme du Site par l’Utilisateur</li>
                                <li>De non-respect des présentes conditions</li>
                                <li>De dommages causés au matériel ou aux données de l’utilisateur ou de tiers du fait de l’accès ou de l’utilisation du site.</li>
                            </ul>
                            <p>Si la SASU « Eden France Consulting » devait être mise en cause dans le cadre d’une procédure liée à l’usage du site par un Utilisateur, elle pourra réclamer à ce dernier le remboursement des sommes, frais ou condamnations éventuelles.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 4. Propriété intellectuelle</h3>
                            <p>L’ensemble des éléments présents sur le site est mis à disposition des utilisateurs pour leur seule consultation.</p>
                            <p>Sont protégés : les marques, textes, visuels, photos, vidéos, illustrations, sons, logos, ainsi que toutes les applications et technologies assurant le fonctionnement du site.</p>
                            <p>Ces éléments appartiennent exclusivement à la SASU « Eden France Consulting » ou à ses partenaires. Toute reproduction, modification, diffusion ou exploitation, totale ou partielle, sans accord écrit préalable de la SASU « Eden France Consulting », est strictement interdite.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 5. La politique des cookies</h3>
                            <p>Lors de la navigation sur le site, des cookies peuvent être enregistrés sur le terminal de l’utilisateur selon ses choix. Ces cookies sont nécessaires au bon fonctionnement du site et à l’optimisation des services proposés par la SASU « Eden France Consulting ».</p>
                            <p>Ils ne contiennent aucune donnée permettant une identification directe ou indirecte de l’utilisateur et se limitent à un identifiant aléatoire, entièrement anonyme.</p>
                            <p>Certains cookies expirent à la clôture de la session de navigation, tandis que d’autres peuvent demeurer actifs pour une durée limitée, conformément à leur finalité.</p>
                            <p>En poursuivant sa navigation, l’utilisateur reconnaît avoir été informé et accepter l’utilisation des cookies. Toutefois, l’emploi de certains cookies peut nécessiter un consentement préalable. En cas de refus, l’utilisateur est informé que l’accès à certaines fonctionnalités ou pages du site pourrait être restreint.</p>
                            <p>L’utilisateur conserve la possibilité de désactiver tout ou partie des cookies via les paramètres de son navigateur. Les modalités sont détaillées sur le site de la CNIL : <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">https://www.cnil.fr/fr/cookies-et-autres-traceurs</a></p>
                        </div>

                        <div className="content-block">
                            <h3>Article 6. Données personnelles</h3>
                            <p>Dans le cadre de l’utilisation du site, la SASU « Eden France Consulting » peut recueillir certaines informations concernant l’utilisateur : données de navigation, pages consultées, adresse IP, etc.</p>
                            <p>Conformément à la loi Informatique et Libertés n°78-17 du 6 janvier 1978, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'utilisateur exerce ce droit :</p>
                            <ul>
                                <li>Par le formulaire de contact</li>
                                <li>Par voie recommandée adressée au siège social</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 7. Droit applicable et juridiction</h3>
                            <p>Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou application, non résolu à l’amiable, sera porté devant les tribunaux compétents selon la loi française.</p>
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

export default Cgu;
