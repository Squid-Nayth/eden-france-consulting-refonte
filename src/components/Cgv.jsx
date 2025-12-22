import React from 'react';
import './Cgv.css';

const Cgv = ({ onBackToHome }) => {
    return (
        <div className="cgv-page">
            <div className="cgv-banner">
                <div className="container">
                    <h1>Conditions Générales de Vente (CGV)</h1>
                    <div className="breadcrumbs">
                        <span onClick={onBackToHome} className="breadcrumb-link">Accueil</span> / CGV
                    </div>
                </div>
            </div>

            <main className="cgv-content">
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
                            <h3>Article 1. Objet et champ d’application</h3>
                            <p>La SASU « Eden France Consulting » dont le siège social est situé au 1 bis rue des carrières 94 120 Fontenay-sous-Bois met en place et dispense des formations inter-entreprises, intra-entreprises et en distanciel, sur l’ensemble du territoire national, seule ou en partenariat.</p>
                            <p>Dans les paragraphes qui suivent, il est convenu de désigner par :</p>
                            <ul>
                                <li><strong>Client/ou apprenant :</strong> toute personne physique ou morale qui s’inscrit ou passe commande d’une formation ou d’une prestation de services auprès de la SASU « Eden France Consulting »</li>
                            </ul>
                            <p>Les présentes CGV fixent les conditions applicables aux prestations de formation effectuées par la SASU « Eden France Consulting » pour le compte d’un client. La validation du devis de formation auprès de la SASU « Eden France Consulting » vaut l’acceptation sans réserve du client/ou apprenant des présentes conditions générales de vente (CGV). Celles-ci prévalent sur tout autre document du client/ou apprenant, en particulier sur toutes conditions générales d’achat.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 2. Devis et prise en charge par l’OPCO</h3>
                            <p>Pour chaque formation, la SASU « Eden France Consulting » s’engage à fournir un devis accompagné d’un programme de formation détaillé au client/ou apprenant, qui sera retourné d’un exemplaire dûment complété, daté, signé avec le cachet, avec la mention « Bon pour accord ».</p>
                            <p>Il appartient au client/ou apprenant de faire sa demande de prise en charge du financement auprès de l’opérateur de compétences (OPCO) dont il relève avant le début de la prestation. À réception de l’accord de financement par l’OPCO, il est tenu de nous le transmettre afin de valider son inscription accompagnée après du devis, contrat ou convention signée. À défaut d’acceptation de la prise en charge par l’OPCO, le client/ou l’apprenant s’engage à payer l’intégralité du coût de la formation qui lui sera facturé.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 3. Prix et modalités de paiement</h3>
                            <p>Les tarifs sont exprimés en HT euros auxquels s’applique la TVA au taux en vigueur sur les prestations de services et comprennent l’accès à la formation et tous les supports de cours, l’accès aux différentes plateformes mis à la disposition du client/ou apprenant pendant toute la durée de sa formation.</p>
                            <p>S’il le juge nécessaire, l’intervenant pourra modifier les contenus des formations suivant l’actualité, la dynamique ou le niveau du candidat ou de groupe. Les intitulés des programmes figurant sur les fiches de présentation sont fournis qu’à titre indicatif.</p>
                            <p>La validation de l’inscription sera prise en compte après réception des justificatifs obligatoires et la réception d’un acompte de 30 % qui devra être versé à l’ouverture du compte client/ou apprenant.</p>
                            <p>Le solde du paiement est à effectuer après exécution de la prestation, à réception de la facture, au comptant par virement bancaire. Dans des situations exceptionnelles, il peut être accordé un paiement échelonné qui sera mis en place avant le début de la formation.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 4. Conditions de report et d’annulation d’une séance de formation</h3>
                            <p>L’annulation d’une séance de formation est possible, à condition de le faire au moins 10 jours calendaires avant le jour et l’heure du début de la formation. Toute annulation doit faire l’objet d’une notification par courriel à l’adresse électronique de la SASU « Eden France Consulting ». En cas d’annulation entre 4 et 10 jours ouvrables avant la date de la formation, le client/ou apprenant est tenu de payer une pénalité d’annulation, à hauteur de 10% du coût total initial de la formation. En cas d’annulation moins de 3 jours ouvrables avant le début de la formation, une pénalité d’annulation correspondant à 50% du coût total initial sera facturée au client. Toute formation commencée est due.</p>
                            <p>La demande de report de sa participation à une formation peut être effectuée par le client, à condition d’adresser une demande écrite à la SASU « Eden France Consulting » dans un délai de 10 jours avant la date de la formation.</p>
                            <p>En cas d’inexécution de ses obligations par suite d’un événement fortuit ou à un cas de force majeure, la SASU « Eden France Consulting » ne pourra être tenue responsable à l’égard de ses clients/ou apprenants. Ces derniers seront informés par courriel.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 5. Obligations des parties et engagements réciproques</h3>
                            <h4>1. Obligations de la SASU « Eden France Consulting »</h4>
                            <ul>
                                <li>Mettre en œuvre toutes les compétences, moyens pédagogiques, techniques et humains nécessaires au bon déroulement de la formation.</li>
                                <li>Proposer un programme conforme aux objectifs annoncés et adapter les modalités pédagogiques si nécessaire, dans l’intérêt du participant.</li>
                                <li>Assurer l’animation de la formation par des intervenants qualifiés, disposant des compétences professionnelles et pédagogiques requises.</li>
                                <li>Fournir au client/ou l’apprenant l’ensemble des documents nécessaires : programme détaillé, convocations, feuilles d’émargement, attestations de réalisation ou certificats de formation.</li>
                                <li>Respecter les règles d’hygiène, de sécurité et de confidentialité relatives aux informations communiquées par le client/ou les participants.</li>
                                <li>Informer le client/ou l’apprenant de toute modification concernant la formation (dates, horaires, lieu, intervenant).</li>
                                <li>Respecter ses obligations légales en matière de déclaration d’activité, de facturation et de conformité aux exigences QUALIOPI lorsque cela s’applique.</li>
                            </ul>

                            <h4>2. Obligations du client</h4>
                            <ul>
                                <li>Fournir toutes les informations nécessaires à l’inscription des participants (coordonnées, besoins spécifiques, prérequis, etc.).</li>
                                <li>Garantir l’exactitude des données transmises à la SASU « Eden France Consulting ».</li>
                                <li>Respecter les modalités de participation : ponctualité, assiduité, engagement dans les activités pédagogiques.</li>
                                <li>Signaler toute absence ou retard du participant dans les meilleurs délais.</li>
                                <li>S’assurer que les participants respectent le règlement intérieur de la SASU « Eden France Consulting » ou du lieu accueillant la formation.</li>
                                <li>Régler les frais de formation conformément aux conditions financières précisées dans le devis ou la convention.</li>
                                <li>Le cas échéant, effectuer les démarches nécessaires auprès des financeurs (OPCO, France Travail, CPF…) et transmettre à la SASU « Eden France Consulting » les justificatifs demandés.</li>
                                <li>Prévenir la SASU « Eden France Consulting » de toute situation pouvant impacter la bonne organisation de la formation.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 6. Propriété intellectuelle et droit d’auteur</h3>
                            <p>Les supports de formation, de tous types (papier, numérique, électronique…), sont protégés par la propriété intellectuelle et le droit d’auteur. Leur reproduction, partielle ou totale, ne peut être effectuée sans l’accord express de la SASU « Eden France Consulting ». Le client/ou l’apprenant s’engage à ne pas copier, communiquer tous les documents mis à sa disposition en vue de l’organisation. La reproduction est strictement interdite.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 7. Protection des données personnelles</h3>
                            <p>Les renseignements privés communiqués par le client/ou l’apprenant à la SASU « Eden France Consulting » sont utiles pour le traitement de l’inscription ainsi que pour la constitution d’un fichier clientèle pour des prospections commerciales. Suivant la loi « informatique et libertés » du 6 janvier 1978, le client/ou l’apprenant dispose d’un droit d’accès, de rectification et d’opposition des données personnelles le concernant.</p>
                            <p>La SASU « Eden France Consulting » s’engage à appliquer les mesures administratives, physiques et techniques appropriées pour préserver la sécurité, la confidentialité et l’intégrité des données du client/ou l’apprenant. Elle s’interdit de transmettre les données personnelles du client/ou l’apprenant, sauf en cas de contrainte légale.</p>
                        </div>

                        <div className="content-block">
                            <h3>Article 8. Responsabilité de la SASU « Eden France Consulting »</h3>
                            <p>La SASU « Eden France Consulting » met en œuvre tous les moyens nécessaires pour assurer la qualité de ses prestations. Toutefois, sa responsabilité ne peut être engagée qu’en cas de faute lourde dûment prouvée.</p>
                            <p>La SASU « Eden France Consulting » décline toute responsabilité dans les cas suivants :</p>
                            <ul>
                                <li>Dommages indirects ou immatériels subis par le client/ou l’apprenant (perte de chiffre d’affaires, perte de données, manque à gagner, préjudice commercial, etc.).</li>
                                <li>Inexactitude, omission ou retard d’informations fournies par le client/ou l’apprenant à La SASU « Eden France Consulting », lorsque ces éléments impactent la bonne réalisation de la formation.</li>
                                <li>Non-respect par le client/ou l’apprenant de ses obligations (assiduité, ponctualité, comportement, respect du règlement intérieur).</li>
                                <li>Dysfonctionnements techniques liés au matériel du client/ou l’apprenant ou à son environnement numérique en cas de formation à distance.</li>
                                <li>Force majeure ou tout événement extérieur, imprévisible et irrésistible rendant impossible l’exécution totale ou partielle de la prestation.</li>
                            </ul>
                            <p>En aucun cas, la SASU « Eden France Consulting » ne peut être tenue responsable :</p>
                            <ul>
                                <li>Des décisions prises par le client/ou l’apprenant à la suite de la formation.</li>
                                <li>De l’utilisation ou mauvaise interprétation des informations, outils ou conseils transmis.</li>
                                <li>Des conséquences liées à l’absence de prérequis ou à l’inadéquation de la formation aux besoins réels du client/ou l’apprenant lorsque ces informations n’ont pas été communiquées.</li>
                            </ul>
                            <p>Le client demeure responsable :</p>
                            <ul>
                                <li>De la conformité des informations fournies à l’organisme.</li>
                                <li>De la mise à disposition des moyens nécessaires (matériel, connexion internet, conditions d’accueil).</li>
                                <li>Du respect des règles de sécurité et du bon comportement client/ou l’apprenant.</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Article 9. Litiges</h3>
                            <p>En cas de différend relatif à l’interprétation, l’exécution ou la validité des présentes conditions, les parties s’efforceront de rechercher une solution amiable avant toute action judiciaire.</p>
                            <p>À défaut d’accord amiable, tout litige sera de la compétence exclusive des tribunaux du ressort du siège social de la SASU « Eden France Consulting » à Créteil, même en cas de pluralité de défendeurs ou d’appel en garantie.</p>
                            <p>Cette clause de compétence s’applique sous réserve des dispositions légales impératives protectrices du consommateur lorsque celles-ci sont applicables (Source www.économie.gouv.fr).</p>
                            <p>L’accès à un dispositif de médiation de la consommation en vue de la résolution amiable de tout litige éventuel lié à l'exécution du contrat. Cette obligation résulte de l’article L.612-1 du code de la consommation. Le médiateur de consommation doit être inscrit sur la liste des médiateurs prévue à l'article L.615-1 du code de la consommation après décision de la CECMC.</p>
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

export default Cgv;
