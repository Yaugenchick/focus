import './scss/reviewsSlider.scss';

import React, { Fragment } from 'react';
import { Dots } from './dots';

export class ReviewsSlider extends React.Component {
    constructor() {
        super()
        this.prewSlide = this.prewSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.state = {
            reviewsContent: [],
            index: 0,
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState(() => ({isLoading: true}))
        fetch("http://localhost:5000/data/reviews.json")
            .then((response) => response.json())
            .then((data) => (this.setState({
                reviewsContent: data,
                isLoading: false
            })))
            .catch((error) => console.log(error));
    };
    nextSlide() {
        let { reviewsContent, index } = this.state,
            slide = index === reviewsContent.length - 1 ? index = 0 : ++index;
        this.setState({
            index: slide
        });
    };
    prewSlide() {
        let { reviewsContent, index } = this.state,
            slide = index === 0 ? index = reviewsContent.length - 1 : --index;
        this.setState({
            index: slide
        });
    };
    render() {
        let { reviewsContent, index, isLoading } = this.state;
        return (
            <Fragment>
                <div className="reviews">
                    <div className="container">
                        <div className="wraper-reviews">
                            <div className="reviews-title">
                                <h3 className="reviews-header">Отзывы наших партнеров</h3>
                            </div>
                            {isLoading ? <p className="loading">...Loading</p>:
                                reviewsContent.map((item, slide) => (
                                (slide === index) ?
                                    <div className="reviews-slider" key={item.id}>
                                        <div className="slide-box slide1"
                                            style={{background: `url(${item.url})`,
                                                    backgroundSize: "contain",
                                                    backgroundRepeat: "no-repeat"}}>
                                            
                                            <span className="position">{item.position1}</span>
                                            <span className="name-user">{item.name1}</span>
                                            <p className="reviews-text">{item.content1}</p>
                                            <a href="#" className="link-reviews">Читать далее</a>
                                        </div>
                                        <div className="slide-box slide2"
                                            style={{background: `url(${item.url})`,
                                                    backgroundSize: "contain",
                                                    backgroundRepeat: "no-repeat"}}>
            
                                            <span className="position">{item.position2}</span>
                                            <span className="name-user">{item.name2}</span>
                                            <p className="reviews-text">{item.content2}</p>
                                            <a href="#" className="link-reviews">Читать далее</a>
                                        </div>
                                        <Dots reviewsContent={reviewsContent} activeIndex={index}/>
                                    </div> :
                                    null
                            ))}
                            <div className="reviews-bottom">
                                <button className="btn btn-reviews">Все отзывы</button>
                                <div className="switch-reviews">
                                    <button className="arrow arrow-prew-reviews" onClick={this.prewSlide}>&lsaquo;</button>
                                    <button className="arrow arrow-next-reviews" onClick={this.nextSlide}>&rsaquo;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
