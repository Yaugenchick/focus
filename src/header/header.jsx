import React, { Fragment } from "react";
import { ChangeLanguage } from './langTheme';
import "./scss/header.scss";
import a1 from "./img/a1.png";
import eye from "./img/eye.png";
import mts from "./img/mts.png";
import viber from "./img/viber.png";
import whatsapp from "./img/whatsapp.png";

export class Header extends React.Component {
    constructor () {
        super();
    }
    render() {
      
        return (
            <Fragment>
                <div className="header">
                    <div className="container">
                        <div className="header-wraper">
                            <ChangeLanguage/>
                            <div className="eye">
                                <img src={eye} alt="" />
                            </div>
                            <div className="messengers">
                                <div className="number number-first">
                                    <a href="+375440101" className="phone">+375 (44) 755-01-01</a>
                                </div>
                                <div className="a1">
                                    <a href="#"><img src={a1} alt="a1" /></a>
                                </div>
                                <div className="viber">
                                    <a href="#"><img src={viber} alt="viber" /></a>
                                </div>
                                <div className="whatsapp">
                                    <a href="#"><img src={whatsapp} alt="whatsapp" /></a>
                                </div>
                                <div className="number number-second">
                                    <a href="+375295500101" className="phone">+375 (29) 550-01-01</a>
                                </div>
                                <div className="mts">
                                    <a href="#"><img src={mts} alt="mts" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}