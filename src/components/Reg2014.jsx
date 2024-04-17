import React, { useState } from 'react';
import '../styles/Reg.scss';
import pad from '../images/padtick.png';


function Reg2014() {
  const initialItems = [
    {
      title: 'Data Structure',
      year: 'November/December 2015',
      qpcode: '14CST31',
      qp:'14CST31_DataStrctures.pdf'
    },
    {
      title: 'OOPS Using C++',
      year: 'November/December 2015',
      qpcode: '14CST32',
      qp: '14CST32_OOPS_using_C++.pdf'
    },
    {
      title: 'Computer Organization',
      year: 'November/December 2015',
      qpcode: '14CST33',
      qp: '14CST33_Computer_Organization.pdf'
    },
    {
      title: 'Digital Logics',
      year: 'November/December 2015',
      qpcode: '14CST34',
      qp:'14CST34_Digital_Logic.pdf'
    },
    {
      title: 'OOPS in C++',
      year:'November/December 2015',
      qpcode: '14CST35',
      qp:'14CST35_OOPS.pdf'
    },
    {
      title: 'Database Management',
      year: 'May/June 2016',
      qpcode: '14CST41',
      qp:'14CST41_Database_Management.pdf'
    },
    {
      title: 'Operating Systems',
      year: 'May/June 2016',
      qpcode: '14CST42',
      qp:'14CST42_Operating_Systems.pdf'
    },
    {
      title: 'Software Engineering',
      year: 'May/June 2016',
      qpcode: '14CST44',
      qp:'14CST44_Software_Engineering.pdf'
    },
    {
      title: 'Data Structures',
      year: 'November/December 2016',
      qpcode: '14CST31',
      qp:'14CST31_Data_Strucures-2.pdf'
    },
    {
      title: 'OOPS Using C++',
      year: 'November/December 2016',
      qpcode: '14CST32',
      qp: '14CST32_OOPS_using_C++-2.pdf'
    },
    {
      title: 'Computer Organization',
      year: 'November/December 2016',
      qpcode: '14CST33',
      qp: '14CST33_Computer_Organization-2.pdf'
    },
    {
      title: 'Digital Logics',
      year: 'November/December 2016',
      qpcode: '14CST34',
      qp:'14CST34_Digital_Logic-2.pdf'
    },
    {
      title: 'OOPS in C++',
      year:'November/December 2016',
      qpcode: '14CST35',
      qp:'14CST35_OOPS-2.pdf'
    },
    {
      title: 'Advanced Databases',
      year: 'November/December 2016',
      qpcode: '14CSE01',
      qp:'14CSE02_Advanced_Databases.pdf'
    },
    {
      title: 'Artificial Intelligence',
      year: 'November/December 2016',
      qpcode: '14CSE02',
      qp: '14CSE02_AI.pdf'
    },
    {
      title: 'Advanced Java',
      year: 'November/December 2016',
      qpcode: '14CSE03',
      qp: '14CSE03_Advanced_Java.pdf'
    },
    {
      title: 'Computation Theory',
      year: 'November/December 2016',
      qpcode: '14CST53',
      qp:'14CST52_CT.pdf'
    },
    {
      title: 'System Design',
      year:'November/December 2016',
      qpcode: '14CST51',
      qp:'14CST51_SD.pdf'
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const filteredItems = initialItems.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase()) 
      || item.qpcode.toLowerCase().includes(event.target.value.toLowerCase()) 
      || item.year.toLowerCase().includes(event.target.value.toLowerCase()) 
    );
    setItems(filteredItems);
  };


  return (
    <div>
      <div className="reghead">
        <h3 style={{ fontSize: '23px', margin: '0px' }}>Regulation - 2014</h3>
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
              <h3 style={{ margin: '8px' }}>{item.title}</h3>
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

export default Reg2014;
