
import React, { Fragment } from 'react';
import fb from './img/facebook.png';
import yt from './img/youtube.png';
import lin from './img/linkedin.png';
import inst from './img/instagram.png';
import oki from './img/odnoklassniki.png';
import vk from './img/vk.png';
import arrow from './img/arrow.png';

export const ContactsNetworks = () => {
    return (
        <Fragment>
            <div className="contacts-networks">
                <div className="contacts-networks-wraper">
                    <div className="contacts-networks-title">
                        <h3 className="contacts-networks-header">
                            ООО “МК-ПРАВОВЫЕ<br />
                            ТЕХНОЛОГИИ”
                        </h3>
                    </div>
                    <div className="reiting">
                        <div className="reiting-title">
                            <strong>УНП</strong>
                            192710862
                        </div>
                        <div className="reiting-title">
                            <strong>Наш рейтинг</strong>
                            5 из 5 (15 отзывов)
                        </div>
                    </div>
                    <div className="contacts-networks-block">
                        <img className="networks-img" src={vk} alt="" />
                        <img className="networks-img" src={oki} alt="" />
                        <img className="networks-img" src={lin} alt="" />
                        <img className="networks-img" src={inst} alt="" />
                        <img className="networks-img" src={yt} alt="" />
                        <img className="networks-img" src={fb} alt="" />
                    </div>
                    <div className="btn-site-map">
                        <button className="btn-contacts site-map">
                            Карта сайта
                            <i><img className="contacts-arrow" src={arrow} alt="" /></i>
                        </button>
                    </div>
                    <div className="btn-politic-confidence">
                        <button className="btn-contacts btn-confidence">
                            Политика<br />
                            конфиденциальности
                            <i><img className="contacts-arrow" src={arrow} alt="" /></i>

                        </button>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}