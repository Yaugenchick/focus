import React, { Fragment } from 'react';

import './scss/mainSlider.scss';

export class MainSlider extends React.Component {
    constructor() {
        super()
        this.nextSlide = this.nextSlide.bind(this)
        this.prewSlide = this.prewSlide.bind(this)
        this.state = {
            mainContent: [],
            activeIndex: 0,
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState(() => ({isLoading: true}))
        const url = "http://localhost:3000/data/main.json";
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState(() => ({
                mainContent: data,
                isLoading: false
            })))
            .catch((error) => console.log(error))
    }
    setSlide(slide) {
        this.setState(() => ({
            activeIndex: slide
        }))
    }
    nextSlide() {
        let { mainContent, activeIndex } = this.state,
            slide = activeIndex === mainContent.length - 1 ? activeIndex = 0 : ++activeIndex;
        this.setSlide(slide);
    }
    prewSlide() {
        let { mainContent, activeIndex } = this.state,
            slide = activeIndex === 0 ? activeIndex = mainContent.length - 1 : --activeIndex;
        this.setSlide(slide);
    }
    render() {
        let {mainContent, activeIndex, isLoading} = this.state;
        return (
            <div className="main">
                { isLoading ? <p className="loading">...Loading</p> :
                    mainContent.map((item, slide) => (
                    (slide === activeIndex) ?
                    <div className="wraper-main" 
                        key={item.id} 
                        style={{background: `url(${item.url})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"}}>
                     
                        <div className="main-title">
                            <h3 className="main-header">{item.title}</h3>
                        </div>
                        <div className="main-content">
                            <p className="main-paragraph">{item.content}</p>
                        </div>
                        <button className="btn btn-main">{item.button}</button>
                    </div> : null
                ))}
                <button className="arrow arrow-main-next" onClick={this.nextSlide}>&rsaquo;</button>
                <button className="arrow arrow-main-prew" onClick={this.prewSlide}>&lsaquo;</button>
            </div>
        );
    }
}