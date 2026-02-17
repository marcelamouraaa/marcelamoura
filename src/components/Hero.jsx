import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [displayName, setDisplayName] = useState('');
  const fullText = 'Welcome,';
  const fullName = "I'm Marcela.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start typing the name after a brief pause
        setTimeout(() => {
          let nameIndex = 0;
          const nameInterval = setInterval(() => {
            if (nameIndex <= fullName.length) {
              setDisplayName(fullName.slice(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);
              setShowCursor(false);
            }
          }, 100);
        }, 200);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {displayText}
            <strong className="typing-name">
              {displayName}
              {showCursor && <span className="cursor">|</span>}
            </strong>
          </h1>
          <p>
          A <b>Data Scientist</b> passionate about applying machine learning  to solve complex, real-world problems. 
          I love finding patterns in challenging datasets and building models that turn data into actionable insights.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="headshot-container">
            <img src={`${import.meta.env.BASE_URL}headshot.jpg`} alt="Marcela Moura" className="headshot" />
          </div>
        </div>
      </div>
    </section>
  );
}
