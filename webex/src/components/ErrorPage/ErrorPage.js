import React from 'react';
import './ErrorPage.css';
import errorPage from '../../images/errorPage.png';
import errorPageWord from '../../images/errorPageWord.png';
import errorSvg from '../../images/errorSvg.svg';

function ErrorPage() {
  return (
    <div className="error_all">
      <div className="error_img">
        <p className="error_title">Ձեր գրանցումը չի իրականացվել</p>
        <p className="error_text">Խնդրում ենք ստուգել մեյլը եվ փորձել կրկին</p>
        <img src={errorPage} alt="errorPage" className="errImg" />
      </div>
    </div>
  );
}

export default ErrorPage;
