import React, { useState } from 'react';
import './VisitHistory.css';

function VisitHistory() {
  const [hoveredRows, setHoveredRows] = useState(new Set());

  const tableData = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
    { id: 4, name: 'Item 4', description: 'Description 4' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredRows((prevHoveredRows) => new Set([...prevHoveredRows, index]));
  };

  const handleMouseLeave = (index) => {
    setHoveredRows((prevHoveredRows) => {
      const newHoveredRows = new Set(prevHoveredRows);
      newHoveredRows.delete(index);
      return newHoveredRows;
    });
  };

  return (
    <div style={{ backgroundColor: '#F4F7F9', width: '100%',height:"100vh", padding: '2%', boxSizing: 'border-box' }}>
      <p className="payment-title">Visit history</p>
      <div className="allPayment">
        <table className="tableStyle">
          <thead className="thead">
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>iconnss</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={item.id}
                className="trStyle"
                style={{ backgroundColor: hoveredRows.has(index) ? '#E1CFFF' : '#FFFFFF' }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.id * 2}</td>
                <td>icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VisitHistory;
