import { ColorModeSwitch, LandingIntro } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/landing-intro/dynamic",
	component: LandingIntro
};

export const Standard: FC = () => {
	return (
		<>
			<LandingIntro />
			<ColorModeSwitch />
		</>
	);
};
