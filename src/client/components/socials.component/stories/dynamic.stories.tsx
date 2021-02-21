import { ColorModeSwitch, Socials } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/socials/dynamic",
	component: Socials
};

export const Standard: FC = () => {
	return (
		<>
			<Socials style={{ width: 500 }} />
			<ColorModeSwitch />
		</>
	);
};
