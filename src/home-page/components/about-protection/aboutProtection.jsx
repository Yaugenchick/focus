import "./scss/aboutProtection.scss";

import React from 'react';
import { AboutProtectionItems } from './aboutProtectionItems';

export const AboutProtection = () => {
	return (
		<div className="about-home-page">
			<div className="container">
				<div className="wraper-about">
					{AboutProtectionItems.map((item) => (
						<div className="about-item" key={item.id}>
							<div className="about-item-images">
								<img className="protection-images" src={item.src} alt={item.alt} />
							</div>
							<span className="about-item-text">{item.label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}