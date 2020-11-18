import './scss/prime.scss';

import React, { Fragment } from 'react';
import { PrimeItemsContent } from './primeItemsContent';

export const Prime = () => {

    return (
        <Fragment>
            <div className="prime">
                    <div className="container">
                        <div className="wraper-prime">
                            {PrimeItemsContent.map((item) => (
                                <div className={item.id === 2 ? `prime-box ${item.cName}`:
                                                    item.id === 3 ? `prime-box ${item.cName}`:
                                                    "prime-box"} key={item.id}>
                                    
                                    <h3 className={item.id === 2 ? `prime-header ${item.cName}`:
                                                    item.id === 3 ? `prime-header ${item.cName}`:
                                                    "prime-header"}>{item.header}
                                                    </h3>            
                                    <p className={item.id === 2 ? `prime-paragraph ${item.cName}`:
                                                    item.id === 3 ? `prime-paragraph ${item.cName}`:
                                                    "prime-paragraph"}>{item.content}
                                                    </p>
                                    <div className="prime-element"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}