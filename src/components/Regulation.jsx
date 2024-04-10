import React from 'react';
import '../styles/Regulation.scss';
import images from '../images/pad1.jpg'

const Regulation = () => {
  // Array of objects representing items to display
  const items = [
    {
      image: '../images/pad1.jpg',
      title: 'Regulation 2014',
      info: 'Other information related to Regulation 2014'
    },
    {
      image: '../images/pad1.jpg',
      title: 'Regulation 2015',
      info: 'Other information related to Regulation 2015'
    },
    {
      image: '../images/pad1.jpg',
      title: 'Regulation 2016',
      info: 'Other information related to Regulation 2016'
    },
    {
      image: '../images/pad1.jpg',
      title: 'Regulation 2017',
      info: 'Other information related to Regulation 2017'
    }
  ];

  return (
    <div className="regulation-main">
      <div className="regulation-inner">
        {items.map((item, index) => (
          <div key={index} className="regulation-item">
           <img src={images} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regulation;
