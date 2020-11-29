
import React, { Fragment } from "react";

import { Confidence } from "./components/confidence/confidence";
import { Contacts } from "./components/contacts/contacts";
import { CostServices } from './components/cost-services/costServices';
import { MorePrime } from './components/more-prime/morePrime';
import { PartnersContent } from './components/partners/partnersContent';
import { Prime } from './components/prime/prime';
import { ReviewsSlider } from './components/reviews-slider/reviewsSlider';
import { MainSlider } from './components/main-slider/mainSlider';
import { AboutProtection } from './components/about-protection/aboutProtection';
import { EscortBussines } from './components/escort-bussines/escortBussines';
import { ServicesHomePage } from './components/services-home-page/servicesHomePage';
import { DirctionsHomePage } from './components/directions-home-page/directionsHomePage';
import { BlockDirectionsContent } from "./components/block-directions-content/blockDirectionsContent";
import { DirectionsSlider } from './components/directions-slider/directionsSlider';
import { FormContent } from './components/form/formContent';
import { BgPancel } from './components/bg-pancel/bgPancel';

export const Home = () => {
	return(
		<Fragment>
			<MainSlider/>
			<AboutProtection/>
			<EscortBussines/>
			<DirctionsHomePage/>
			<BlockDirectionsContent/>
			<DirectionsSlider/>
			{/*<ReviewsSlider/>*/}
			<PartnersContent/>
			<Prime/>
			<BgPancel/>
			<ServicesHomePage/>
			<Confidence/>
			<MorePrime/>
			<FormContent/>
			<CostServices/>
			<Contacts/>
		</Fragment>
	)
}