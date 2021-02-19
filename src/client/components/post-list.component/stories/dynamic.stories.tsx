import { PostLink, PostList } from "@/client/components";
import React, { FC } from "react";

export default {
	title: "components/post-list/dynamic",
	component: PostList
};

export const Standard: FC = () => {
	return (
		<PostList spacing={4}>
			<PostLink
				header="Sample Post Title"
				description="Here is a meaningful description"
				date="01/01/2021"
			/>
			<PostLink
				header="Sample Post Title 2"
				description="Here is a meaningful description"
				date="01/01/2021"
			/>
		</PostList>
	);
};
