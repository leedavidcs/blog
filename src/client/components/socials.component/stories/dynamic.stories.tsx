import { Socials } from "@/client/components";
import { FC } from "react";

export default {
	title: "components/socials/dynamic",
	component: Socials
};

export const Standard: FC = () => {
	return <Socials style={{ width: 500 }} />;
};
