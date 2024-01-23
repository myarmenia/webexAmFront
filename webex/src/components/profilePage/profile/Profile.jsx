import React from 'react';
import './Profile.css';
import profileImg from '../../../images/profileImg.png';
import pencleEdit from '../../../images/pencle-edit.png';

function Profile() {
  return (
    <div style={{ backgroundColor: '#F4F7F9', width: '100%', padding: '2%', boxSizing: 'border-box' }}>
      <p className="your-profile-title">Քո Պրոֆիլը</p>
      <div className="allProfile">
        <div className="profile-picture">
          <div className="profile-img">
            <img src={profileImg} alt="profile" className="profile-img-img"/>
          </div>
          <div className="profile-name">
            <img src={pencleEdit} alt="pencleEdit" />
            <span className="profile-name-title">
              Maria Brown
            </span>
          </div>
        </div>
        <div className="fill-details">
          <p className="fill-details-title">Լրացրու տվյալներդ</p>
          <div className="input-container">
            <input type="text" className="fill-details-nameInp" placeholder="Անուն Ազգանուն" />
            <img src={pencleEdit} alt="pencleEdit" className="input-edit" />
          </div>
          <input
            type="text"
            className="fill-details-nameInp fill-details-nameInpEmail"
            placeholder="Էլ. հասցե"
          />
          <div className="input-container">
            <input type="text" className="fill-details-nameInp" placeholder="հեռախոսի համար" />
            <img src={pencleEdit} alt="pencleEdit" className="input-edit" />
          </div>
          <div className="buttons-for-fill">
            <button className="button-save">Պահպանել</button>
            <button className="button-cancel">Չեղարկել</button>
          </div>
        </div>
        <div className="change-password">
          <div className="change-password-div">
            <p className="change-password-title">փոխիր գաղտնաբառը</p>
            <input type="text" placeholder="Placeholder Text" className="change-password-input" />
          </div>
          <div className="change-password-div2">
            <p className="change-password-title">կրկնիր գաղտնաբառը</p>
            <input type="text" placeholder="Placeholder Text" className="change-password-input" />
          </div>
          <button className="button-save button-save-down">Պահպանել</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
