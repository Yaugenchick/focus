

import React, { Fragment } from 'react';

export const ContactsTime = () => {
    return (
        <Fragment>
            <div className="contacts-time">
                <div className="contacts-time-title">
                    <h3 className="contacts-time-header">Время работы</h3>
                </div>
                <div className="contacts-time-wraper">
                    <div className="contacts-time-visitors">
                        <div className="time-title">
                            <span>Прием посетителей</span>
                        </div>
                        <div className="time-text">
                            <span>Ежедневно с 8.00 до 19.00<br />
                                Выходной: суббота - воскресенье.
                            </span>
                        </div>
                    </div>
                    <div className="contacts-time-calls">
                        <div className="time-title">
                            <span>Прием звонков</span>
                        </div>
                        <div className="time-text">
                            <span>Ежедневно с 8.00 до 22.00<br />
                                Без выходных
                            </span>
                        </div>
                    </div>
                    <div className="contacts-time-consultate">
                        <div className="time-title">
                            <span>Онлайн консультант</span>
                        </div>
                        <div className="time-text">
                            <span> Круглосуточно 24/7<br />
                                Без выходных
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}