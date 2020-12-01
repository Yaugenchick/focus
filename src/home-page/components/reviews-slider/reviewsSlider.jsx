import './scss/reviewsSlider.scss';

import React from 'react';
import { Slider } from './slider';
import { MediaSlider } from './mediaSlider';

export class ReviewsSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			vw: 0
		}
	}
	componentDidMount() {
		this.setState(() => ({
			vw: window.innerWidth
		}))
	}
	render() {
		let {vw} = this.state
		return(
			<div className="reviews">
			<div className="container">
				<div className="wraper-reviews">
					<div className="reviews-title">
						<h3 className="reviews-header">Отзывы наших партнеров</h3>
					</div>
					{(vw >= 730) ? <Slider/> : <MediaSlider/>}
				</div>
			</div>
		</div>
		);
	}
}