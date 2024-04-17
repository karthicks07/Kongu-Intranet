import React, { useState } from 'react';
import '../styles/Reg.scss';
import pad from '../images/padtick.png';

function Reg2018() {
  const initialItems = [
    {
      title: 'Data Structure',
      year: 'December 2019',
      qpcode: '18CST31',
      qp:'18CST31_DS.pdf'
    },
    {
      title: 'Computer Organisation',
      year: 'December 2019',
      qpcode: '18CST032',
      qp:'18CST32_CO.pdf'
    },
    {
      title: 'OOPS using C',
      year: 'December 2019',
      qpcode: '18CST33',
      qp:'18CST33_OOPS.pdf'
    },
    {
      title: 'Compiler Design',
      year: 'May 2022',
      qpcode: '18CST31',
      qp:'18CST61_Compiler Design.pdf'
    },
    {
      title: 'Machine Learning',
      year: 'May 2022',
      qpcode: '18CST32',
      qp:'18CST62_ML.pdf'
    },
    {
      title: 'Human Computer Interface',
      year: 'December 2022',
      qpcode: '18CSE12',
      qp:'18CSE12_HCI.pdf'
    },
    {
      title: 'Software Project',
      year: 'December 2022',
      qpcode: '18CSE22',
      qp:'18CSE22_Software Project.pdf'
    },
    {
      title: 'Software Quality',
      year: 'December 2022',
      qpcode: '18CSE11',
      qp:'18CSE17_Software Quality.pdf'
    },
    {
      title: 'Data Warehousing',
      year: 'May 2022',
      qpcode: '18CSE05',
      qp:'18CSE05_Data Warehousing.pdf'
    },
    {
      title: 'Building Enterprise',
      year: 'May 2022',
      qpcode: '18CSE06',
      qp:'18CSE06_Building Enterprise.pdf'
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Filter items based on the search query
    const filteredItems = initialItems.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase()) || item.qpcode.toLowerCase().includes(event.target.value.toLowerCase()) 
    );
    setItems(filteredItems);
  };

  return (
    <div>
      <div className="reghead">
        <h3 style={{ fontSize: '23px', margin: '0px' }}>Regulation - 2018</h3>
        <input
          type="search"
          className="searchbar"
          placeholder="Search by title or course code..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="qp-container">
        {items.map((item, index) => (
          <a href={item.qp}  target="_blank" rel="noreferrer"><div key={index} className="qp-details">
          <div className="qpimage">
            <img src={pad} alt="pad" className="padimage" />
          </div>
          <div className="details">
            <h3 style={{ margin: '8px', fontSize:'16px' }}>{item.title}</h3>
            <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'gray', margin: '5px' }}>
              {item.year}
            </h5>
            <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'gray', margin: '5px' }}>
              Course Code: {item.qpcode}
            </h5>
          </div>
        </div></a>
        ))}
      </div>
    </div>
  );
}

export default Reg2018;
