
import { useTranslation } from 'react-i18next'
import { issue_icon, planningIcon, programming_icon, testingIcon, ui_design_icon } from '../../iconFolder/icon'
import './ProjectCycle.css'
import { memo, useState } from 'react'
import OrderModal from '../OrderModal/OrderModal'

function ProjectCycle() {
    const {t} = useTranslation()
    const [openOrderModal, setOpenOrderModal] = useState(false)
    const [messageModal, setMessageModal] = useState(false)


    const WebProjectCycleData = [
        {
            id: '1',
            title: t('web_projectPage_cycleTitles.0'),
            text: t('web_projectPage_cycleTexts.0'),
            icon: planningIcon
        },
        {
            id: '2',
            title: t('web_projectPage_cycleTitles.1'),
            text: t('web_projectPage_cycleTexts.1'),
            icon: ui_design_icon
        },

        {
            id: '3',
            title: t('web_projectPage_cycleTitles.2'),
            text: t('web_projectPage_cycleTexts.2'),
            icon: programming_icon
        },

        {
            id: '4',
            title: t('web_projectPage_cycleTitles.3'),
            text: t('web_projectPage_cycleTexts.3'),
            icon: testingIcon
        },

        {
            id: '5',
            title: t('web_projectPage_cycleTitles.4'),
            text: t('web_projectPage_cycleTexts.4'),
            icon: issue_icon
        },
    ]
  return (
    <div className='web_project_cycle'>
            <h2>{t('web_project_cycle_title')}</h2>
           <div className='web_project_cycle_block'>
                <div className="container">
                        <div className="web_project_cycle_items">
                            {
                                WebProjectCycleData.map(el => (
                                    <div key={el.id} className='web_project_cycle_item'>
                                        <h3>{'0' + el.id}</h3>
                                        <h4>{el.title}</h4>
                                        <p>{el.text}</p>
                                        <span>{el.icon}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <button className='web_project_cycle_order_btn' onClick={() => setOpenOrderModal(true)}>{t('button.11')}</button>
                </div>
           </div>
        {openOrderModal && <OrderModal {...{ setOpenOrderModal, setMessageModal, openOrderModal}}/>}

    </div>
  )
}

export default memo(ProjectCycle)