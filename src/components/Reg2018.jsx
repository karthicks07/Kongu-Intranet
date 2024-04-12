import React, { useState } from 'react';
import '../styles/Reg.scss';
import pad from '../images/padtick.png';

function Reg2018() {
  const initialItems = [
    {
      title: 'Data Structure',
      year: 'April/May 2016',
      qpcode: '20CST21'
    },
    {
      title: 'Computer Networks',
      year: 'April/May 2017',
      qpcode: '20CST22'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
    },
    {
      title: 'Database Systems',
      year: 'April/May 2018',
      qpcode: '20CST23'
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
          <div key={index} className="qp-details">
            <div className="qpimage">
              <img src={pad} alt="pad" className="padimage" />
            </div>
            <div className="details">
              <h3 style={{ margin: '8px' }}>{item.title}</h3>
              <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'gray', margin: '5px' }}>
                {item.year}
              </h5>
              <h5 style={{ fontSize: '12px', fontWeight: '600', color: 'gray', margin: '5px' }}>
                Course Code: {item.qpcode}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reg2018;
