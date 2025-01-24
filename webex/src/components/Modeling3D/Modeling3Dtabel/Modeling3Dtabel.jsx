import React from 'react'
import './Modeling3Dtabel.css'
import { useTranslation } from 'react-i18next';

function Modeling3Dtabel() {
    const { t } = useTranslation();
    const tabelData = [
        {
            id: '1',
            name: t('modeling3D_tabel.0.project'),
            deadline:t('modeling3D_tabel.0.time'),
            price: t('modeling3D_tabel.0.price'),
            priceText: t('modeling3D_tabel.0.priceText'),
        },

        {
            id: '2',
            name: t('modeling3D_tabel.1.project'),
            deadline: t('modeling3D_tabel.1.time'),
            price: t('modeling3D_tabel.1.price'),
            priceText: t('modeling3D_tabel.1.priceText'),
        },

        {
            id: '3',
            name: t('modeling3D_tabel.2.project'),
            deadline: t('modeling3D_tabel.2.time'),
            price: t('modeling3D_tabel.2.price'),
            priceText: t('modeling3D_tabel.2.priceText'),
        },

        {
            id: '4',
            name: t('modeling3D_tabel.3.project'),
            deadline: t('modeling3D_tabel.3.time'),
            price: t('modeling3D_tabel.3.price'),
            priceText: t('modeling3D_tabel.3.priceText'),
        },

        {
            id: '5',
            name: t('modeling3D_tabel.4.project'),
            deadline: t('modeling3D_tabel.4.time'),
            price: t('modeling3D_tabel.4.price'),
            priceText: t('modeling3D_tabel.4.priceText'),
        },

        {
            id: '6',
            name: t('modeling3D_tabel.5.project'),
            deadline: t('modeling3D_tabel.5.time'),
            price: t('modeling3D_tabel.5.price'),
            priceText: t('modeling3D_tabel.5.priceText'),
        },

        {
            id: '7',
            name: t('modeling3D_tabel.6.project'),
            deadline: t('modeling3D_tabel.6.time'),
            price: t('modeling3D_tabel.6.price'),
            priceText: t('modeling3D_tabel.6.priceText'),
        },


    ]
  return (
    <div className='modeling3Dtabel_section'>
        <div className="container">
            <h2>{t('modeling3D_tabel_title')}</h2>

            <table className='modeling3Dtabel_table'>
                <thead>
                    <tr>
                        <th>{t('modeling3D_tabel_th.0')}</th>
                        <th>{t('modeling3D_tabel_th.1')}</th>
                        <th>{t('modeling3D_tabel_th.2')}</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tabelData.map(el => (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.deadline}</td>
                                <td className='modeling3Dtabel_price_td'>
                                    <span className='modeling3Dtabel_price'>{el.price}</span>
                                    <span>{el.priceText}</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Modeling3Dtabel