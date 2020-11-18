
import './scss/costServices.scss';

import React, { Fragment } from 'react';

export const CostServices = () => {
    return (
        <Fragment>
            <div className="cost-services">
                <div className="container">
                    <div className="cost-services-title">
                        <h3 className="cost-services-header">
                            Стоимость юридических услуг в Минске
                        </h3>
                    </div>

                    <div className="cost-services-content">
                        <p className="cost-services-paragraph">Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени, затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены обоснованными и понятными для клиента.</p>
                    </div>
                    <div className="cost-services-btn">
                        <button className="btn btn-cost-services">Тарифы</button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}