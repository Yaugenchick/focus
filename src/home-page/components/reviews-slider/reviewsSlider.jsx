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
    updateScreenDevise = () => {
        this.setState(() => ({
            vw: window.innerWidth
        }))
    }
	componentDidMount() {
		this.setState(() => ({
			vw: window.innerWidth
		}))
		window.addEventListener('resize', this.updateScreenDevise);
	}
	componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenDevise);
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