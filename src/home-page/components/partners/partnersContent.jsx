import './scss/partnersContent.scss';

import React from 'react';
import { PartnersLogoItems } from './partnersLogoItems';


export class PartnersContent extends React.Component {
    constructor() {
        super();
        this.state = {
            screen: 0
        }
    }
    componentDidMount() {
        this.setState((prewState) => ({
            screen: prewState.screen = window.innerWidth
        }))
    }
    render() {
        return (
            <div className="container">
                <div className="wraper-partners-content">
                    <div className="partners-text">
                        <p className="partners-paragraph">
                            Оказываем юридические услуги юридическим лицам и индивидуальным предпринимателям.<br /> Специализируемся в области хозяйственного права, работаем на всей территории Республики<br />Беларусь, а также за ее пределами, с бизнесом любого масштаба.
                            </p>
                    </div>
                    <button className="btn btn-partners">Наши партнеры</button>
                </div>
                <div className="wraper-partners">
                    <div className="partners-logo">
                        {PartnersLogoItems.map((item) => (
                            <i key={item.id}><img src={item.src} alt={item.alt}/></i>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}