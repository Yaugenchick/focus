import React from 'react';

export const DirectionsListHomePage = ({children}) => {

	return (
		<div className="directions-items-wraper">
			{children.map((item) => (
				<div className="item-directions" key={item.id}>
					<div className="item-directions-title">
					<div className="label-directions">{item.label}</div>
					</div>
					<div className="wraper-ico-directions">
						<img src={item.src} alt={item.alt} className="ico-directions" />
					</div>
					<button className="btn-item btn-item-directions">{item.button}</button>
				</div>
			))}
		</div>
	)
}