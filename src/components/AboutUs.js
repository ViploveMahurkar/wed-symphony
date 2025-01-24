import React from "react";
import "./AboutUs.css"; // Ensure you link to your AboutUs.css

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h2 className="about-us-title">Welcome to WedSymphony</h2>
        <p className="about-us-tagline">
          Where Your Dream Wedding Becomes a Beautiful Reality
        </p>
      </div>

      <div className="about-us-content">
        <section className="about-us-text">
          <h2>Our Story</h2>
          <p>
          In the heart of every Indian wedding lies a timeless tradition - one where love is celebrated not just between two individuals, but between two families,
          two cultures, and two souls destined to be together. At WedSymphony, we understand the significance of this sacred union and the dreams that accompany it.
          </p>
          <p>
          Our journey began with a simple vision: to create a space where every bride and groom, every parent, and every family member feels supported, cared for,
          and honored throughout their wedding planning journey. Just as a marriage is a beautiful blend of customs and rituals, so is the experience we
          provide - a harmonious fusion of tradition, personalization, and unforgettable moments.
          </p>
          <p>
          We believe that every wedding tells a unique story - one that reflects the values, rituals, and dreams of the couple and their families.
          From the vibrant mehendi ceremony to the auspicious pheras, every moment should be planned with love, care, and devotion.
          At WedSymphony, our team is committed to ensuring that your special day is not just an event, but a memory cherished for generations to come.
          We are more than just wedding planners; we are the creators of lifelong memories, the curators of your dream wedding.
          Our passion for excellence and our dedication to making your wedding a true reflection of your culture, values, and traditions is what sets us apart.
          In every detail, we celebrate the essence of Indian weddings - where the threads of destiny are woven together through vibrant celebrations,
          heartfelt prayers, and the blessings of loved ones. With WedSymphony, your wedding becomes a journey of joy, love, and blessings,
          where every moment is crafted with grace, beauty, and devotion.
          </p>
          <p>
          Welcome to WedSymphony, where your wedding dreams come to life, surrounded by the warmth and richness of Indian tradition.
          </p>
        </section>

        <section className="about-us-mission-vision">
          <div className="about-us-mission">
            <h3>Our Mission</h3>
            <p>
              Our mission is simple - to bring your dream wedding to life while making the journey to your big day as
              beautiful and stress-free as possible. We are dedicated to crafting personalized experiences, focusing
              on every tiny detail that makes your day unforgettable. Whether it's an intimate gathering or a grand
              celebration, we want you to be fully present in the moments that matter most.
            </p>
            <p>
              With a deep understanding of your desires, we aim to make you feel seen, heard, and celebrated as
              you step into this new chapter. Every love story deserves to be celebrated, and we want to be a part
              of yours.
            </p>
          </div>
          <div className="about-us-vision">
            <h3>Our Vision</h3>
            <p>
              We envision creating a world where every couple feels truly understood, and every wedding reflects
              their love story in the most extraordinary way. Our vision is to continue creating moments that are as
              timeless as your love. A wedding is not just an event - it’s a beautiful memory that stays with you forever.
              With WedSymphony, we aim to make it nothing short of magical.
            </p>
            <p>
              Our dream is to become your first choice in making your wedding dreams come true, whether you're
              looking for simplicity, luxury, or something in between. Together, let's craft your unforgettable day.
            </p>
          </div>
        </section>
      </div>

      <div className="about-us-team">
        <h2>Meet the Heart Behind WedSymphony</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-photo">
              <img src="team-member1.jpg" alt="Team Member" />
            </div>
            <div className="team-member-info">
              <h4>Viplove Mahurkar</h4>
              <p>Lead Wedding Planner</p>
              <p>
                Viplove is the heart and soul of WedSymphony. With a passion for perfection and an eye for detail, he’s
                been turning dream weddings into reality for years. John's belief is simple - every wedding should
                feel like a celebration of love and life, and his mission is to make sure every detail reflects that.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-member-photo">
              <img src="team-member2.jpg" alt="Team Member" />
            </div>
            <div className="team-member-info">
              <h4>Mayank Gawde</h4>
              <p>Event Coordinator</p>
              <p>
                Mayank brings warmth and clarity to every event. As our Event Coordinator, his passion is ensuring
                that your wedding flows seamlessly from start to finish. His unwavering dedication ensures that your
                wedding day is filled with joy, laughter, and unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
