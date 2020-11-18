import './scss/formContent.scss';

import React from 'react';
import { FormContentItems } from './formContentItems';
import { Form } from './form';


export const FormContent = () => {

    return (
        <div className="form-content">
            <div className="container">
                <div className="wraper-form-content">
                    <div className="form-content-title">
                        <h3 className="form-content-header">Организация сотрудничества</h3>
                    </div>
                    <div className="form-content-block">
                        {FormContentItems.map((item) => (
                            <div className="form-content-item" key={item.id}>
                                {(item.id === 1) ? <div className={`form-content-element ${item.cName}`}></div>:
                                 (item.id === 2) ? <div className={`form-content-element ${item.cName}`}></div>:
                                 (item.id === 3) ? <div className={`form-content-element ${item.cName}`.trim()}></div>:
                                    null}
                                <div className="form-content-block-text">
                                    <p className="form-content-block-paragraph">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
}