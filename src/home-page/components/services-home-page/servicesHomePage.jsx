import './scss/servicesHomePage.scss';

import React, { Fragment } from 'react';
import { ServicesListHomePage } from './servicesListHomePage';
import { ListServicesItems } from './listServicesItems';


export const ServicesHomePage = () => {
    return (
        <Fragment>
            <div className="services-home-page">
                <div className="container">
                    <div className="services-title-home-page">
                        <h3 className="services-header-home-page">Перечень оказываемых услуг</h3>
                    </div>
                    <ServicesListHomePage
                    children={ListServicesItems}
                    />
                    <div className="services-content-home-page">
                        <div className="services-text-home-page">
                            <p className="services-paragraph-home-page">Оказание юридических услуг юридическим лицам и индивидуальным предпринимателям – наша работа. Среди собственников бизнеса принято считать, что прочитать закон в Интернете и применить его на практике - это одно и тоже. Основываясь на этом убеждении, они часто отказываются от профессиональной помощи. Практика же показывает, что только опытный юрист может правильно разобраться в правовых тонкостях, своевременно предотвратить ложные шаги и ускорить получение результата.</p>
                        </div>
                        <button className="btn btn-services-home-page">Все услуги</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}