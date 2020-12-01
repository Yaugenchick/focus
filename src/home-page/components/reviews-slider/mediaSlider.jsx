import './scss/reviewsSlider.scss';

import React from 'react';
import { MediaReviewsData } from './data/reviewsData'
import { Dots } from './dots';

export class MediaSlider extends React.Component {
	constructor() {
		super();
		this.prewSlide = this.prewSlide.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.state = {
			reviewsContent: [],
			index: 0
		}
	}

	componentDidMount() {
		this.setState(() => ({
			reviewsContent: MediaReviewsData
		}))
	}
	nextSlide() {
		let { reviewsContent, index } = this.state,
			slide = index === reviewsContent.length - 1 ? index = 0 : ++index;
		this.setState({
			index: slide
		});
	}
	prewSlide() {
		let { reviewsContent, index } = this.state,
			slide = index === 0 ? index = reviewsContent.length - 1 : --index;
		this.setState({
			index: slide
		});
	}
	render() {
		let { reviewsContent, index } = this.state;
		return (
			<>
				{reviewsContent.map((item, slide) => (
					(slide === index) ?
						<div className="reviews-slider" key={item.id}>
							<div className="slide-box slide1"
								style={{
									background: `url(${item.url})`,
									backgroundSize: "contain",
									backgroundRepeat: "no-repeat"
								}}>
								<div className="reviews-user">
									<span className="position">{item.position}</span>
									<span className="name-user">{item.name}</span>
								</div>
								<p className="reviews-text">{item.content}</p>
								<a href="#" className="link-reviews">Читать далее</a>
							</div>
							<Dots reviewsContent={reviewsContent} activeIndex={index} />
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
			</>
		);
	}
}
