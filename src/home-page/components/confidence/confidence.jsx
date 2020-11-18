import './scss/confidence.scss';

import React, { Fragment } from 'react';
import { ConfidenceItemsContent } from './confidenceItemsContent';


export const Confidence = () => {
    return (
        <Fragment>
            <div className="confidence-wraper">
                <div className="container">
                    {ConfidenceItemsContent.map((content) => (
                        <div className="confidence" key={content.id}>
                            <div className="confidence-content">
                                <div className="confidence-title">
                                    <h3 className="confidence-header">{content.header}</h3>
                                </div>
                                <div className="confidence-text">
                                    <p className="confidence-paragraph">{content.paragraph}</p>
                                </div>
                            </div>
                            <div className="confidence-list">
                                <div className="confidence-list-item">
                                    <div className="confidence-list-element"></div>
                                    <p className="confidence-list-item-text">{content.firstPrime}</p>
                                </div>
                                <div className="confidence-list-item">
                                    <div className="confidence-list-element"></div>
                                    <p className="confidence-list-item-text">{content.secondPrime}</p>
                                </div>
                                <div className="confidence-list-item">
                                    <div className="confidence-list-element"></div>
                                    <p className="confidence-list-item-text">{content.thirdPrime}</p>
                                </div>
                                <div className="confidence-list-item">
                                    <div className="confidence-list-element"></div>
                                    <p className="confidence-list-item-text">{content.fourthPrime}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}