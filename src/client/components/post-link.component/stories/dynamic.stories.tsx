import { PostLink } from "@/client/components";
import { ColorModeSwitch } from "@/client/components/color-mode-switch.component";
import React, { FC } from "react";

export default {
	title: "components/post-link/dynamic",
	component: PostLink
};

export const Standard: FC = () => {
	return (
		<>
			<PostLink
				header="Sample Post Title"
				description="Here is a meaningful description"
				date="01/01/2021"
				mt={12}
			/>
			<ColorModeSwitch />
		</>
	);
};
