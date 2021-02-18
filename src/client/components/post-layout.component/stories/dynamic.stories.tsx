import { PostLayout } from "@/client/components";
import React from "react";

export default {
	title: "components/post-layout/dynamic",
	component: PostLayout
};

export const Standard = () => {
	return <PostLayout>Hello world~!</PostLayout>;
};

Standard.parameters = {
	layout: "fullscreen"
};
