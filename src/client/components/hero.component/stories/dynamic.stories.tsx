import { Hero } from "@/client/components";
import { FC } from "react";

export default {
	title: "components/hero/dynamic",
	component: Hero
};

export const Standard: FC = () => {
	return <Hero />;
};
