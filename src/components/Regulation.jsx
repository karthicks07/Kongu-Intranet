import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Regulation.scss';
import pad1 from '../images/pad1.png';
import pad2 from '../images/pad2.png';
import pad3 from '../images/pad3.png';
import pad4 from '../images/pad4.png';

const Regulation = () => {
  // Array of objects representing items to display
  const items = [
    {
      image: pad1,
      title: 'Regulation - 2014',
      info: 'Other information related to Regulation 2014',
      route: 'Reg2014',
      color: '#407BFF'
    },
    {
      image: pad2,
      title: 'Regulation - 2018',
      info: 'Other information related to Regulation 2015',
      route: 'Reg2018',
      color: '#f8bd0a'
    },
    {
      image: pad3,
      title: 'Regulation - 2020',
      info: 'Other information related to Regulation 2016',
      route: 'Reg2020',
      color: '#92E3A9'
    },
    {
      image: pad4,
      title: 'Regulation - 2022',
      info: 'Other information related to Regulation 2017',
      route: 'Reg2022',
      color: '#7E57C2'
    }
  ];

  return (
    <div className="regulation-main">
    <div className="regulation-inner">
       {items.map((item, index) => (
         <div key={index} className="regulation-item">
          <img src={item.image} alt={item.title} />
           <h2>{item.title}</h2>
           <Link to={`/${item.route}`}><button style={{ backgroundColor: item.color}}><span>Search</span></button></Link> 
         </div>
       ))}
     </div>
   </div> 
  );
};

export default Regulation;
