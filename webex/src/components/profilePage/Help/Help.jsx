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


  const questions = [
    {
      id: 1,
      question: t('frequently_asked_questions.0'),
      answer: t('frequently_asked_questions_answers.0'),
    },
      {
      id: 2,
      question: t('frequently_asked_questions.1'),
      answer: t('frequently_asked_questions_answers.1'),
    },
      {
      id: 3,
      question: t('frequently_asked_questions.2'),
      answer: t('frequently_asked_questions_answers.2'),
    },
    {
      id: 4,
      question: t('frequently_asked_questions.3'),
      answer: t('frequently_asked_questions_answers.3'),
    },

    { 
      id: 5,
      question: t('frequently_asked_questions.4'),
      answer: t('frequently_asked_questions_answers.4'),
    },
    
  ]
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
          {questions.map((question) => (
            <Accordion.Item eventKey={question.id} key={question.id}>
              <Accordion.Header>{question.question}</Accordion.Header>
              <Accordion.Body>{question.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
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
