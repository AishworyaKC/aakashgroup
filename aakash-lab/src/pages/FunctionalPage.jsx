import React, { useEffect, useState } from 'react';

const FunctionalPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://inshorts.deta.dev/news?category=technology')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
      })
      .catch((err) => {
        console.log('Failed to fetch news:', err);
      });
  }, []);

  return (
    <section className="functional-page">
      <h2>Tech Trends & Updates</h2>
      <p style={{ marginBottom: '2rem', fontSize: '1rem', color: '#555' }}>
        Stay up-to-date with the latest happenings in the tech world — handpicked for curious minds like you!
      </p>

      <div className="news-grid">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {item.readMoreUrl && (
              <a href={item.readMoreUrl} target="_blank" rel="noreferrer">
                Read full story →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunctionalPage;
