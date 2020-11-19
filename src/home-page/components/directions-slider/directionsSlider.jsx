import './scss/directionsSlider.scss';

import React from 'react';

export class DirectionsSlider extends React.Component {
	constructor() {
		super()
		this.nextSlide = this.nextSlide.bind(this)
		this.prewSlide = this.prewSlide.bind(this)
		this.state = {
			index: 0,
			slides: [],
			isLoading: false
		}
	}
	componentDidMount() {
		this.setState(() => ({ isLoading: true }))
		fetch("http://localhost:5000/data/directions.json")
			.then((response) => response.json())
			.then((data) => this.setState(() => ({
				slides: data,
				isLoading: false
			})))
			.catch((error) => console.log(error))

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
		let { slides, index, isLoading } = this.state
		return (
			<div className="directions-slider">
				<div className="container">
					<div className="directions-slider-wraper">
						{isLoading ? <p className="loading">...Loading</p> :
							slides.map((item, slide) => (
								(slide === index) ?
									<div className="directions-slides"
										key={item.id}
										style={{
											background: `url(${item.url})`,
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat"
										}}>
									</div> : null
							))}
					</div>
				</div>
				<button className="arrow arrow-directions-next" onClick={this.nextSlide}>&rsaquo;</button>
				<button className="arrow arrow-directions-prew" onClick={this.prewSlide}>&lsaquo;</button>
			</div>
		)
	}
}