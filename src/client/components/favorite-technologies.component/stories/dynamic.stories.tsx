import { FavoriteTechnologies } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/favorite-technologies/dynamic",
	component: FavoriteTechnologies
};

export const Standard: FC = () => {
	return <FavoriteTechnologies />;
};