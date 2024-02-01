import React from 'react';
import './Help.css';
import Accordion from 'react-bootstrap/Accordion';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { sendClientQuestion } from '../../../store/slices/Help/HelpApi';
import { getMessage } from '../../../store/slices/Help/HelpSlice';
import { useTranslation } from 'react-i18next'

const validationSchema = yup.object({
  email: yup.string().email('Անվանման սխալ').required('Էլ. հասցեն պարտադիր է'),
  message: yup.string().required('Հաղորդագրությունը պարտադիր է'),
});

function Help() {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch();
  const messageAnswer = useSelector(getMessage);
  console.log('messageAnswer', messageAnswer);
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(sendClientQuestion(values));
      // Handle form submission logic here
      console.log('Form submitted with values:', values);
      resetForm();
    },
  });
  return (
    <div
      style={{
        backgroundColor: '#F4F7F9',
        width: '100%',
        padding: '2%',
        boxSizing: 'border-box',
      }}>
      <p className="help-title">{t('help.0')}</p>
      <div className="AllHelp">
        <p className="fast-support">{t('help.1')}</p>
        <p className="often-asked-question">
        {t('help.2')}
        </p>
        <Accordion>
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
        <form onSubmit={formik.handleSubmit}>
          <div className="write-your-question">
            <p className="write-your-question-title">{t('help.3')} </p>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder={t('help.4')}
              className="write-your-question-input"
            />
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={t('help.5')}
              className="write-your-question-input"
            />
            {formik.touched.email && formik.errors.email ? (
              <span style={{ color: 'red', marginTop: '-20px' }}>{formik.errors.email}</span>
            ) : null}
            <input
              type="text"
              name='phone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder={t('help.6')}
              className="write-your-question-input"
            />
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              cols="52"
              rows="8"
              placeholder={t('help.7')}
              className="write-your-question-textarea"></textarea>
            {formik.touched.message && formik.errors.message ? (
              <span style={{ color: 'red', marginTop: '-20px' }}>{formik.errors.message}</span>
            ) : null}
            <div className='succesMessge'> 
            <button type="submit" className="button-save">{t('help.8')}</button> 
              <span>{messageAnswer ? messageAnswer : ''}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Help;
