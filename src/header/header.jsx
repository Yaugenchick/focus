import React, { Fragment } from "react";
import "./scss/header.scss";
import a1 from "./img/a1.png";
import eye from "./img/eye.png";
import mts from "./img/mts.png";
import viber from "./img/viber.png";
import whatsapp from "./img/whatsapp.png";

export class Header extends React.Component {
    constructor () {
        super();
        this.handleClickChangeLang = this.handleClickChangeLang.bind(this)
        this.state = {
            changeLang: true
        }
    }
    handleClickChangeLang () {
        this.setState((prewState) => ({
            changeLang: !prewState.changeLang
        }))
    }
    render() {
        let {changeLang} = this.state;
        return (
            <Fragment>
                <div className="header">
                    <div className="container">
                        <div className="header-wraper">
                            <div className="change-language">
                                {changeLang ? (
                                    <span className="language-title-ru">
                                        <p className="lang-ru">Язык русский</p>
                                    </span> 
                                ):(
                                    <span className="language-title-eng">
                                        <p className="lang-eng">Lang english</p>
                                    </span> 
                                )}
                                <button className="btn-arrow-lang" onClick={this.handleClickChangeLang}>&#957;</button>
                            </div>
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