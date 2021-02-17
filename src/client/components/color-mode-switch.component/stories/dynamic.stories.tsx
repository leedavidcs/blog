import { ColorModeSwitch } from "@/client/components";
import { FC } from "react";

export default {
	title: "components/color-mode-switch/dynamic",
	component: ColorModeSwitch
};

export const Standard: FC = () => {
	return <ColorModeSwitch />;
};
