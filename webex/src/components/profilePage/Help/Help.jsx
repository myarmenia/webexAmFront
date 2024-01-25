import React from 'react';
import './Help.css';
import Accordion from 'react-bootstrap/Accordion';

function Help() {
  return (
    <div
      style={{
        backgroundColor: '#F4F7F9',
        width: '100%',
        padding: '2%',
        boxSizing: 'border-box',
      }}>
      <p className="help-title">Օգնություն</p>
      <div className="AllHelp">
        <p className="fast-support">Արագ աջակցություն</p>
        <p className="often-asked-question">
          Ամենահաճախ տրվող հարցերի պատասխաններն ընդամենը մեկ սեղմումով:
        </p>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Որո՞նք են դասավանդման մեթոդները:</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Որո՞նք են դասավանդման մեթոդները:</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Որո՞նք են դասավանդման մեթոդները:</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="write-your-question">
          <p className="write-your-question-title">Գրեք ձեր հարցը </p>
          <input type="text" placeholder='Անուն Ազգանուն' className="write-your-question-input"/>
          <input type="text" placeholder='Էլ. հասցե' className="write-your-question-input"/>
          <input type="text" placeholder='հեռախոսի համար' className="write-your-question-input"/>
          <textarea cols="52" rows="8" placeholder='հաղորդագրություն' className="write-your-question-textarea"></textarea>
          <button className="button-save">Ուղարկել</button>
        </div>
      </div>
    </div>
  );
}

export default Help;
