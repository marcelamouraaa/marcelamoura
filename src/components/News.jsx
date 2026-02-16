export default function News() {
  const newsItems = [
    {
      date: "December 2025",
      title: "Presented at AGU Conference",
      category: "Conference",
      description: "Presented research on EMIC wave propagation at the American Geophysical Union (AGU) annual conference in New Orleans, L.A.",
      image: `${import.meta.env.BASE_URL}news-agu.jpg`,
      link: `${import.meta.env.BASE_URL}agu-poster.pdf`
    },
    {
      date: "September 2025",
      title: "1st Place at GirlHacks 2025",
      category: "Hackathon",
      description: "Our team won first place at GirlHacks 2025 for developing GAIA, a mentorship app with a Gemini chatbot that provides support for women on campus. ",
      image: `${import.meta.env.BASE_URL}news-girlhacks.jpg`
    },
    {
      date: "August 2025",
      title: "Finished Summer Research at NJIT",
      category: "Research",
      description: "Completed my summer as a Grace Hopper Research Institute (GHRI) Artificial Intelligence Fellow, developing a machine learning model for geomagnetic event forecasting.",
      image: `${import.meta.env.BASE_URL}news-reu.jpg`
    },
    {
      date: "June 2025",
      title: "Visited Big Bear Solar Observatory",
      category: "Research",
      description: "Visited the Big Bear Solar Observatory in California as part of my research position at NJIT.",
      image: `${import.meta.env.BASE_URL}news-bigbear.jpg`
    }
  ];

  return (
    <section className="news" id="news">
      <div className="news-content">
        <h2>News</h2>
        <p className="news-subtitle">What Have I Been Up To?</p>
        <div className="news-scroll-container">
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-text">
                <div className="news-date">{item.date}</div>
                <h3>{item.title}</h3>
                <div className="news-category">{item.category}</div>
                <p className="news-description">
                  {item.description}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                        View Poster →
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
