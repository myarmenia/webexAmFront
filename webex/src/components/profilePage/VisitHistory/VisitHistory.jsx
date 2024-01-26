import React, { useEffect, useState } from 'react';
import './VisitHistory.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitHistory } from '../../../store/slices/VisitHistory/VisitHistoryApi';
import {
  getAllVisitDate,
  getLoadingVisitHistory,
} from '../../../store/slices/VisitHistory/VisitHistorySlice';

function VisitHistory() {
  const dispatch = useDispatch();
  const AllVisitDate = useSelector(getAllVisitDate);
  const loading = useSelector(getLoadingVisitHistory);


  const [hoveredRows, setHoveredRows] = useState(new Set());

  useEffect(() => {
    dispatch(getVisitHistory());
  }, []);
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
  console.log('AllVisitDate', AllVisitDate);

  return (
    <>
      {loading ? (
        <div>loadingg</div>
      ) : (
        <div
          style={{
            backgroundColor: '#F4F7F9',
            width: '100%',
            height: '100vh',
            padding: '2%',
            boxSizing: 'border-box',
          }}>
          <p className="payment-title">Visit history</p>
          <div className="allPayment">
            <table className="tableStyle">
              <thead className="thead">
                <tr>
                  <th>Number</th>
                  <th>Lessons</th>
                  <th>Total lessons</th>
                  <th>Number lessons</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {AllVisitDate.map((item, index) => (
                  <tr
                    key={item.id}
                    className="trStyle"
                    style={{ backgroundColor: hoveredRows.has(index) ? '#E1CFFF' : '#FFFFFF' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.total_lessons}</td>
                    <td>{item.current_lesson_number}</td>
                    <td>icon</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default VisitHistory;
