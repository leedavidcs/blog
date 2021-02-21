import { ColorModeSwitch, Link } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/link/dynamic",
	component: Link
};

export const Standard: FC = () => {
	return (
		<>
			<Link href="https://google.com">Test Link</Link>
			<ColorModeSwitch />
		</>
	);
};
