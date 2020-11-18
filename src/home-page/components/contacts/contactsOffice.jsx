
import React, { Fragment } from 'react';

export const ContactsOffice = () => {
    return (
        <Fragment>
            <div className="contacts-office">
                <div className="contacts-office-title">
                    <h3 className="contacts-office-header">Наши офисы</h3>
                </div>
                <div className="contacts-office-wraper">
                    <div className="contacts-minsk">
                        <h5 className="town header-capital">Контакты в Минске</h5>
                        <span className="phone">+375 (44) 755-01-01</span>
                        <span className="phone">+375 (29) 550-01-01</span>
                        <span className="phone">+375 (17) 374-40-60</span>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">г. Минск, ул. Широкая, д. 3,<br />
                            пом. 146, оф. 4</span>
                        </div>
                        <div className="contacts-RF">
                            <span className="adress-title">Телефон для связи резидентов
                            Российской Федерации
                            </span>
                            <span className="phone">whatsapp +7 (989) 166 24 00</span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">info@jurisprudent.by</a>
                        </div>
                    </div>

                    <div className="contacts-west-region">
                        <h5 className="town header-mogilev">Отдел в Могилеве</h5>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">г. Могилев, ул. Космонавтов,<br />
                            д. 19, оф. 507
                            </span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">mogilev@jurisprudent.by</a>
                        </div>
                        <h5 className="town header-brest">Отдел в Бресте</h5>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">г. Брест, б-р Шевченко, д. 4,<br />
                            оф. 401
                            </span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">brest@jurisprudent.by
                            </a>
                        </div>
                        <h5 className="town header-vitebsk">Отдел в Витебске</h5>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">г. Витебск, ул.Гоголя, д. 14,<br />
                            оф. 614
                            </span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">vitebsk@jurisprudent.by</a>
                        </div>
                    </div>

                    <div className="contacts-east-region">
                        <h5 className="town header-hrodno">Отдел в Гродно</h5>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">
                                г. Гродно, ул. Карла Маркса,<br />
                            д. 31-1, оф. 1010
                            </span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">grodno@jurisprudent.by</a>
                        </div>
                        <h5 className="town header-gomel">Отдел в Гомеле</h5>
                        <div className="adress">
                            <span className="adress-title">Адрес</span>
                            <span className="adress-street">
                                г. Гомель, пр. Ленина, д. 10,<br />
                            оф. 901
                            </span>
                        </div>
                        <div className="contacts-mail">
                            <a className="footer-mail" href="#">gomel@jurisprudent.by</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}