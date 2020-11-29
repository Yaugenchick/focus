import React from "react";
import { NavLink } from 'react-router-dom';
import { NavItems } from './navItems';
import "./scss/nav.scss";
import logo from "./img/logo.png";
import search from "./img/search.png";

export class Nav extends React.Component {
    constructor() {
        super();
        this.handleMediaMenu = this.handleMediaMenu.bind(this)
        this.handleLink = this.handleLink.bind(this)
        this.state = {
            enable: false,
            vw: 0
        }
    }
    checkScreenDevise = () => {
        let { vw } = this.state
        if (vw > 1024) {
            this.setState(() => ({
                enable: false
            }))
        }
    }
    updateScreenDevise = () => {
        this.setState(() => ({
            vw: window.innerWidth
        }),
            () => this.checkScreenDevise())
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateScreenDevise);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenDevise);
    }
    handleMediaMenu() {
        this.setState((prevState) => ({
            enable: !prevState.enable
        }))
    }
    handleLink(event) {
        if (window.innerWidth <= 1024) {
            if (event.target) {
                this.setState((prevState) => ({
                    enable: !prevState.enable
                }))
            }
        }
    }
    render() {
        return (

            <div className="navigation">
                <div className="container">
                    <div className="wraper-nav-content">
                        <div className="logo-wraper">
                            <a href="#" className="logo"><img src={logo} alt="" /></a>
                        </div>

                        <nav className={!this.state.enable ? "nav" : "nav-open"}>
                            <ul className="nav-wraper">
                                {NavItems.map((item, index) => (
                                    <li key={index}
                                        className={item.cName}
                                        onClick={this.handleLink}>
                                        <NavLink to={item.url}>{item.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="search">
                            <button className="btn-search">
                                <img src={search} alt="search" />
                            </button>
                        </div>
                        <div className={!this.state.enable ? "menu-media" : "menu-media media-open"}
                            onClick={this.handleMediaMenu}>
                            <span className="media-element"></span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}