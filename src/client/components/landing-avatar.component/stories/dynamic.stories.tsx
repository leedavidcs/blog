import { LandingAvatar } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/landing-avatar/dynamic",
	component: LandingAvatar
};

export const Standard: FC = () => {
	return <LandingAvatar />;
};
