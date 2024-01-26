import React from 'react';
import './Training.css';
import Purchase from '../../../../images/Purchase.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Training({ DataAll }) {
  return (
    <div className="training-cards-all">
      {DataAll.my_training.map((el, index) => (
        <div className={index % 2 == 0 ? 'training-cards-blue' : 'training-cards'} key={index}>
          <div className="account_div">
            <img src={Purchase} alt="Student" className="account_img" />
            <span className="account_name">{el.name}</span>
          </div>
          <div className="purchaseHistory_down">
            <div className="purchaseHistory_lessCount">
              <div className="lesson_count">
                <span className="lesson_count_number">
                  {el.active_languages_quantity || el.current_lesson_number}
                </span>
                <span className="lesson_count_name">Lessons</span>
              </div>
              <div className="lesson_total">of total {el.total_languages || el.total_lessons}</div>
            </div>
            <div className="purchaseHistory_procent">
              {/* {el.active_languages_quantity ? 
              <div>({((el.active_languages_quantity / el.total_languages) * 100).toFixed(1)}%) </div> : <div>({((el.current_lesson_number / el.total_lessons) * 100).toFixed(1)}%)</div>
              } */}
              {el.active_languages_quantity ? (
                <div style={{ width: 60, height: 60 }}>
                  {' '}
                  <CircularProgressbar
                    value={((el.active_languages_quantity / el.total_languages) * 100).toFixed(0)}
                    text={`${((el.active_languages_quantity / el.total_languages) * 100).toFixed(
                      0,
                    )}%`}
                    strokeWidth={15}
                    styles={{
                      text: {
                        fill: '#F9F9F9',
                        fontSize: '25px',
                      },
                      trail: {
                        // Trail color
                        stroke: '#1A1A42',
                      },
                      path: {
                        // Path color
                        stroke: '#766BDB',
                      },
                    }}
                  />
                </div>
              ) : (
                <div style={{ width: 60, height: 60 }}>
                  {' '}
                  <CircularProgressbar
                    value={((el.current_lesson_number / el.total_lessons) * 100).toFixed(0)}
                    text={`${((el.current_lesson_number / el.total_lessons) * 100).toFixed(0)}%`}
                    strokeWidth={15}
                    styles={{
                      text: {
                        fill: '#F9F9F9',
                        fontSize: '25px',
                      },
                      trail: {
                        // Trail color
                        stroke: '#1A1A42',
                      },
                      path: {
                        // Path color
                        stroke: '#766BDB',
                      },
                    }}
                  />
                </div>
              )}
              {/* ({((DataAll.dashboard.visit_history.lesson_quantity / DataAll.dashboard.visit_history.total_lesson_days) * 100).toFixed(1)}%) */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Training;
