import React from 'react';

export const ServicesListHomePage = ({children}) => {
	
	return (
		<div className="services-list-home-page">
			{children.map((item) => (
				<div className="services-item-home-page" key={item.id}>
					{(item.id === 1) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.4)"}}></div>:
					(item.id === 2) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.4)"}}></div>:
					(item.id === 9) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.4)"}}></div>:
					(item.id === 10) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.4)"}}></div>:
					(item.id === 3) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.75)"}}></div>:
					(item.id === 4) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.75)"}}></div>:
					(item.id === 7) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.75)"}}></div>:
					(item.id === 8) ? <div className="services-item-element-home-page" style={{background: "rgba(222, 195, 119, 0.75)"}}></div>:
					(item.id === 5) ? <div className="services-item-element-home-page" style={{background: " #DEC377"}}></div>:
					(item.id === 6) ? <div className="services-item-element-home-page" style={{background: " #DEC377"}}></div>:
					null}
					<div className="services-item-label">{item.label}</div>
					<button className="btn-item btn-item-services-home-page">{item.button}</button>
				</div>
			))}
		</div>
	);
}