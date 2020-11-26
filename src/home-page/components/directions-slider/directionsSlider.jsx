import './scss/directionsSlider.scss';

import React from 'react';
import { DirectionsData } from './data/directionsData';

export class DirectionsSlider extends React.Component {
	constructor() {
		super();
		this.nextSlide = this.nextSlide.bind(this)
		this.prewSlide = this.prewSlide.bind(this)
		this.state = {
			index: 0,
			slides: []
		}
	}
	componentDidMount() {
		this.setState(() => ({
			slides: DirectionsData
		}))
	}
	setSlide(slide) {
		this.setState(() => ({ index: slide }))
	}
	nextSlide() {
		let { slides, index } = this.state,
			slide = index === slides.length - 1 ? index = 0 : ++index;
		this.setSlide(slide);
	}
	prewSlide() {
		let { slides, index } = this.state,
			slide = index === 0 ? index = slides.length - 1 : --index;
		this.setSlide(slide);
	}
	render() {
		let { slides, index } = this.state
		return (
			<div className="directions-slider">
				<div className="container">
					<div className="directions-slider-wraper">
						{slides.map((item, slide) => (
							(slide === index) ?
								<div className="directions-slides"
									key={item.id}
									style={{
										background: `url(${item.url})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat"
									}}>
								</div>
								: null
						))}
					</div>
				</div>
				<button className="arrow arrow-directions-next" onClick={this.nextSlide}>&rsaquo;</button>
				<button className="arrow arrow-directions-prew" onClick={this.prewSlide}>&lsaquo;</button>
			</div>
		)
	}
}