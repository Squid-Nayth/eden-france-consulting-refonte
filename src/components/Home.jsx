import React, { Suspense } from 'react';
import Hero from './Hero';

// Lazy load sections that are below the fold
const ServicesSection = React.lazy(() => import('./ServicesSection'));
const PartnersSection = React.lazy(() => import('./PartnersSection'));

const Home = () => {
    return (
        <>
            <Hero />

            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chargement des services...</div>}>
                <ServicesSection />
            </Suspense>

            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chargement des partenaires...</div>}>
                <PartnersSection />
            </Suspense>
        </>
    );
};

export default Home;
