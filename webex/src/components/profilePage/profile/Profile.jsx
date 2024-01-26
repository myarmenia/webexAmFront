import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import profileImgg from '../../../images/profileImg.png';
import pencleEdit from '../../../images/pencle-edit.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from '../../../store/slices/Auth/AuthSlice';
import { editPassword, editUser } from '../../../store/slices/Profile/ProfileApi';
import { getMessage } from '../../../store/slices/Profile/ProfileSLice';

function Profile() {
  const authUser = useSelector(getAuthUser);
  const getMes = useSelector(getMessage)
  const [profileImg, setProfileImg] = useState(profileImgg);
  const [changedImg, setChangedImage] = useState({});
  const fileInputRef = useRef();
  const dispatch = useDispatch()


  const handleFileChange = (event) => {
    // const file = event.target.files[0];
    const file = fileInputRef.current.files[0];

    if (file) {
      setChangedImage(file)
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProfileImg = reader.result;
        setProfileImg(newProfileImg);
      };
      reader.readAsDataURL(file);


    }
  };
  const [defaultData, setDefaultData] = useState()
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [changePass, setChangePass] = useState({
    old_password: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    let userInfo = { name: authUser.name, phone: authUser.phone, email: authUser.email};
    setData(userInfo);
    setDefaultData(userInfo)
  }, [authUser, setData,setDefaultData]);
  // const [nameSur, setNameSur] = useState(authUser?.authUser?.name)

  const changeUserInfo = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };
  const changeUserPassword = (e, key) => {
    setChangePass({ ...changePass, [key]: e.target.value });
  };

const sendUserPassword = () =>{
  dispatch(editPassword(changePass))
}
const sendUserInfo = () => {
    const formData = new FormData()
    formData.append('data', JSON.stringify(data))
    if(changedImg.size){
      formData.append('avatar', changedImg)
    }

    dispatch(editUser(formData))
}
const cancelFunc = () => {
  setData(defaultData)
}

  // console.log(data, 8888888888);
  console.log(authUser, "555555555ggggg5");
  // console.log("changePass",changePass);
  // console.log("nameSur",nameSur);
  console.log("getMes",getMes);
  return (
    <div
      style={{ backgroundColor: '#F4F7F9', width: '100%', padding: '2%', boxSizing: 'border-box' }}>
      <p className="your-profile-title">Քո Պրոֆիլը</p>
      <div className="allProfile">
        <div className="profile-picture">
          <div className="profile-img">
            <img src={profileImg || authUser.avatar} alt="profile" className="profile-img-img img-other" />
          </div>
          <div className="profile-name">
            {/* <img src={pencleEdit} alt="pencleEdit" onClick={()=>console.log("Aaaaaaaa")}/> */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="fileInput" 
              ref={fileInputRef}
            />
            <label htmlFor="fileInput">
              <img src={pencleEdit} alt="pencilEdit" style={{ cursor: 'pointer' }} />
            </label>
            {/* <span className="profile-name-title">Maria Brown</span> */}
          </div>
        </div>
        <div className="fill-details">
          <p className="fill-details-title">Լրացրու տվյալներդ</p>
          <div className="input-container">
            <input
              type="text"
              className="fill-details-nameInp"
              placeholder="Անուն Ազգանուն"
              value={data.name ?? ""}
              onChange={(e) => changeUserInfo(e, 'name')}
            />
            <img src={pencleEdit} alt="pencleEdit" className="input-edit" />
          </div>
          <input
            type="text"
            className="fill-details-nameInp fill-details-nameInpEmail"
            placeholder="Էլ. հասցե"
            value={data.email ?? ""}
            readOnly
          />
          <div className="input-container">
            <input
              type="text"
              className="fill-details-nameInp"
              placeholder="հեռախոսի համար"
              value={data.phone?? ""}
              onChange={(e) => changeUserInfo(e, 'phone')}
            />
            <img src={pencleEdit} alt="pencleEdit" className="input-edit" />
          </div>
          <div className="buttons-for-fill">
            <button className="button-save" onClick={sendUserInfo}>Պահպանել</button>
            <button className="button-cancel" onClick={cancelFunc}>Չեղարկել</button>
          </div>
        </div>
        <p className={getMes ? "acceptMes" : "refuseMes"}>{getMes.length > 1 ? `${getMes}` : "chdarav"}</p>
        <div className="change-password">
          <div className="change-password-div">
            <p className="change-password-title">գրիր գործող գաղտնաբառը</p>
            <input type="text" placeholder="Placeholder Text" className="change-password-input" onChange={(e) => changeUserPassword(e, 'old_password')}/>
          </div>
          <div className="change-password-div2">
            <p className="change-password-title">գրիր նոր գաղտնաբառը</p>
            <input type="text" placeholder="Placeholder Text" className="change-password-input" onChange={(e) => changeUserPassword(e, 'password')}/>
          </div>
          <div className="change-password-div2">
            <p className="change-password-title">կրկնիր նոր գաղտնաբառը</p>
            <input type="text" placeholder="Placeholder Text" className="change-password-input" onChange={(e) => changeUserPassword(e, 'password_confirmation')}/>
          </div>
          <button className="button-save button-save-down" onClick={sendUserPassword}>Պահպանել</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
