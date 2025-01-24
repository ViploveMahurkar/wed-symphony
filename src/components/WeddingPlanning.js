import React from 'react';
import { Link } from 'react-router-dom';
import './WeddingPlanning.css';

const WeddingPlanning = () => {
  return (
    <div className="wedding-planning-container">
      <div className="wedding-planning-header">
        <h2 className="wedding-planning-title">Wedding Planning Services</h2>
        <p className="wedding-planning-tagline">Creating Memorable Moments, Crafting Timeless Weddings</p>
      </div>

      <div className="wedding-planning-content">
        <div className="wedding-planning-text">
          <h2>Our Wedding Planning Services</h2>
          <p>
          Planning a wedding is a beautiful but overwhelming journey. At WedSymphony, we take the stress out of wedding planning by managing every detail for you.
          Whether you're dreaming of a grand celebration or a cozy, intimate affair, we offer tailored solutions that reflect your vision and style.
          Let us help you create a wedding that is as unique as your love story.
          </p>
        </div>

        <section className="wedding-planning-section">
          <div className="wedding-planning-service">
            <h4>Initial Consultation</h4>
            <p>
                Our journey begins with an in-depth consultation, where we get to know you and your partner.
                We’ll discuss your vision for the wedding, your preferences, and any unique requirements you have in mind.
                This helps us understand your style, culture, and dreams, ensuring that every aspect of the planning process is aligned with your desires.
            </p>
          </div>
          <div className="wedding-planning-service">
            <h4>Budget Management</h4>
            <p>
                Weddings can quickly become expensive if not planned with careful attention to budget.
                Our team will work with you to create a budget that balances your dream wedding with financial feasibility.
                We will help you prioritize spending, find cost-effective solutions, and ensure that every money spent is used wisely without compromising on quality.
            </p>
            <ul>
                    <li>Set and manage your wedding budget</li>
                    <li>Track expenses and payments</li>
                    <li>Negotiate with vendors for the best deals</li>
                    <li>Provide recommendations based on your budget</li>
            </ul>
          </div>
          <div className="wedding-planning-service">
            <h4>Theme and Design</h4>
            <p>
                From colors to decor, our team will work with you to design a wedding that captures your essence and celebrates your love story.
                We understand the importance of traditional elements, as well as modern touches, in creating the perfect wedding atmosphere.
                Whether you're envisioning a royal affair, a rustic celebration, or a modern chic event, we will help bring your dream wedding to life.
            </p>
            <ul>
                <li>Theme and concept development</li>
                <li>Custom décor and floral arrangements</li>
                <li>Venue styling and seating arrangements</li>
                <li>Lighting and ambience creation</li>
            </ul>
          </div>
          <div className="wedding-planning-service">
            <h4>Catering Coordination</h4>
            <p>
                A seamless wedding day starts with a well-planned rehearsal.
                We will coordinate and manage your wedding rehearsal to ensure everyone knows their roles.
                On the big day, we’ll be there to oversee all logistics and ensure that the ceremony and reception go according to plan,
                so you can focus on making memories.
            </p>
            <ul>
                <li>Wedding rehearsal planning</li>
                <li>Vendor coordination and management</li>
                <li>Guest coordination and seating</li>
                <li>On-the-day event supervision and troubleshooting</li>
            </ul>
          </div>
        </section>
        <section className="wedding-planning-section">
        <div className="wedding-planning-service">
            <h4>Vendor Selection & Management</h4>
            <p>
                Finding the right vendors is crucial to executing your dream wedding. Our team works with a network of trusted, experienced wedding vendors, including photographers, florists, caterers, makeup artists, and more. We'll recommend the best vendors based on your style, preferences, and budget, and manage all communications and contracts on your behalf.
            </p>
            <ul>
                <li>Photography and videography</li>
                <li>Catering and menu selection</li>
                <li>Hair and makeup artists</li>
                <li>Wedding planners and decorators</li>
                <li>Entertainment (DJ, live music, etc.)</li>
            </ul>
          </div>
          <div className="wedding-planning-service">
            <h4>Timeline Management</h4>
            <p>
                One of the most important aspects of a wedding is ensuring everything happens on time. Our team will create a comprehensive wedding timeline, ensuring that every event, from the pre-wedding rituals to the final farewell, runs smoothly. We’ll ensure that all vendors and guests are coordinated, and the event flows seamlessly.
            </p>
            <ul>
                <li>Wedding day schedule creation</li>
                <li>Vendor coordination and timeline management</li>
                <li>Rehearsal day preparation and coordination</li>
                <li>On-the-day timeline management</li>
            </ul>
          </div>
          <div className="wedding-planning-service">
            <h4>Guest Management</h4>
            <p>
                Managing guest lists, RSVPs, and seating arrangements can be stressful. Let us take care of it for you! Our guest management service ensures that your guest list is organized, invitations are sent on time, and RSVPs are tracked. We also manage seating arrangements, ensuring that your guests are comfortably seated according to your preferences.
            </p>
            <ul>
                <li>RSVP management</li>
                <li>Seating arrangements and layout planning</li>
                <li>Guest communication and updates</li>
                <li>Special accommodation for guests with unique needs</li>
            </ul>
          </div>
          
          <div className="wedding-planning-service">
            <h4>Post Wedding Services</h4>
            <p>
                The wedding day may be over, but there are still tasks to handle! Our post-wedding services include coordinating the pickup of wedding gifts,
                ensuring that all vendors are paid, and even managing thank-you notes.
                We handle the final details, allowing you and your partner to start your new journey without worry.
            </p>
            <ul>
                <li>Vendor payment and finalization</li>
                <li>Gift management and thank-you notes</li>
                <li>Event wrap-up and feedback collection</li>
                <li>Follow-up with guests for any special requests</li>
            </ul>
          </div>
        </section>
        <section className="wedding-planning-section">
          <div className="wedding-planning-service">
            <h4>And much more!</h4>
            <p>
            Let us take the stress out of wedding planning so you can focus on enjoying your day.
            </p>
          </div>
        </section>
      </div>

      {/* <div className="fee-section">
        <h3>Our Wedding Planning Packages</h3>
        <p>
          Our wedding planning packages are designed to fit every budget and ensure the highest level of service.
          Whether you want an intimate ceremony or a grand celebration, we’ve got you covered.
        </p>

        <div className="fee-details">
          <div className="fee">
            <h4>Basic Package</h4>
            <p>Starting from ₹50,000</p>
          </div>
          <div className="fee">
            <h4>Premium Package</h4>
            <p>Starting from ₹1,00,000</p>
          </div>
          <div className="fee">
            <h4>Luxury Package</h4>
            <p>Starting from ₹2,50,000</p>
          </div>
        </div>
      </div> */}

      <div className="cta">
        <h3>Let Us Make Your Wedding a Masterpiece</h3>
        <p>
          Get in touch with us to start planning your dream wedding today. Our team is excited to work with you every step of the way.
        </p>
        <Link to="/contactus">
            <button className="cta-button">Start Planning Now</button>
        </Link>
        
      </div>
    </div>
  );
};

export default WeddingPlanning;
