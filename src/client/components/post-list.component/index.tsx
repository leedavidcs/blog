import { List, ListProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";

export const PostList: FC<ListProps> = (props) => {
	return (
		<List
			as={motion.ul}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={{
				enter: { transition: { staggerChildren: 0.15 } },
				exit: { transition: { staggerChildren: 0.15 } }
			}}
			{...props}
		/>
	);
};
