import './scss/directionsHomePage.scss';

import React from 'react';
import { DirectionsItemsHomePage } from './directionsItemsHomePage';
import { DirectionsListHomePage } from './directionsListHomePage';

export const DirctionsHomePage = () => {
	return(
		<div className="directions-home-page">
			<div className="container">
				<div className="directions-home-page-wraper">
					<h3 className="directions-home-page">Основные направления деятельности</h3>
					<DirectionsListHomePage
					children={DirectionsItemsHomePage}
					/>
					<button className="btn btn-directions-home-page">Все услуги</button>
				</div>
			</div>
		</div>
	)
}