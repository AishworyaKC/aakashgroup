import React from 'react';
import dummyGirl from '../assets/dummy girl.png';


const Team = () => {
  const members = [
    {
      name: 'Aishu',
      role: 'Tester',
      image: dummyGirl
    },
    {
      name: 'Sita',
      role: 'Designer',
      image: dummyGirl
    },
    {
      name: 'Rita',
      role: 'Developer',
      image: dummyGirl
    }
  ];

  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
