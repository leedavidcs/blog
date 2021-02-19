import { Stack, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react";

export const PostList: FC<StackProps> = (props) => {
	return (
		<Stack
			as={motion.div}
			direction="column-reverse"
			alignItems="stretch"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={{
				enter: { transition: { staggerChildren: 0.15, staggerDirection: -1 } },
				exit: { transition: { staggerChildren: 0.15, staggerDirection: -1 } }
			}}
			{...props}
		/>
	);
};
