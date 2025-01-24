// src/components/PackagesPage.js
import React from 'react';

function PackagesPage() {
    return (
        <section className="packages-page">
            <h1>Our Wedding Packages</h1>
            <div className="package">
                <h2>Basic Package</h2>
                <p>For couples looking for a simple yet elegant celebration. Price: $3000</p>
            </div>
            <div className="package">
                <h2>Premium Package</h2>
                <p>For couples who want a luxurious celebration with extra services. Price: $6000</p>
            </div>
            <div className="package">
                <h2>Luxury Package</h2>
                <p>For couples seeking the ultimate wedding experience. Price: $10000</p>
            </div>
        </section>
    );
}

export default PackagesPage;
