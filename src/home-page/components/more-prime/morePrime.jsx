import './scss/morePrime.scss';

import React, { Fragment } from 'react';
import { MorePrimeContent } from './morePrimeContent';



export const MorePrime = () => {
    return (
        <Fragment>
            <div className="more-prime">
                <div className="container">

                    <div className="more-prime-title">
                        <h3 className="more-prime-header">Наши преимущества</h3>
                    </div>

                    <div className="wraper-more-prime">
                        {MorePrimeContent.map((item) => (
                            <div className="item-more-prime" key={item.id}>
                                <div className="image-more-prime">
                                    <img className="prime-img" src={item.src} alt={item.alt} />
                                </div>
                                <div className="item-more-prime-title">
                                    <span className="more-prime-text">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="more-prime-horizontal-block">
                            <p className="more-prime-paragraph">Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай.</p>
                        <div className="triangle-prime"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}