import React from 'react';

const Hero = ({ handleLogout }) => (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button type="button" onClick={handleLogout}>logout</button>
      </nav>
    </section>
  );

export default Hero;
