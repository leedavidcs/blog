import { Flex, FlexProps } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/system";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";

export const Surface: FC<FlexProps & HTMLMotionProps<"div">> = (props) => {
	const { colorMode } = useColorMode();

	const bgColor = { light: "gray.50", dark: "gray.900" };
	const color = { light: "black", dark: "white" };

	return (
		<Flex
			as={motion.div}
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			{...props}
		/>
	);
};
