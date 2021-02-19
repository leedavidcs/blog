import { ColorModeSwitch } from "@/client/components/color-mode-switch.component";
import { Link } from "@/client/components/link.component";
import { MDXProvider } from "@/client/components/mdx-provider.component";
import { Surface } from "@/client/components/surface.component";
import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import React, { FC } from "react";

const classes = {
	content: css`
		box-sizing: border-box;
		margin: 32px auto;
		padding: 24px 12px;
		max-width: 640px;
		width: 100%;
	`
};

export const PostLayout: FC<BoxProps> = ({ children, ...restBoxProps }) => {
	const { colorMode } = useColorMode();

	return (
		<Surface
			minHeight="100vh"
			initial="exit"
			animate="enter"
			exit="exit"
			{...(restBoxProps as any)}
		>
			<Box
				as={motion.div}
				variants={{
					enter: {
						y: 0,
						opacity: 1,
						transition: {
							delay: 0.1,
							duration: 0.5,
							easing: [0.175, 0.85, 0.42, 0.96]
						}
					},
					exit: {
						y: 100,
						opacity: 0,
						transition: {
							duration: 0.5,
							ease: [0.175, 0.85, 0.42, 0.96]
						}
					}
				}}
				css={classes.content}
			>
				<NextLink href="/" passHref={true}>
					<Link
						color={colorMode === "light" ? "purple.500" : "purple.300"}
						fontSize="xl"
						fontWeight={700}
					>
						lee.david.cs
					</Link>
				</NextLink>
				<Box mt={8}>
					<MDXProvider>{children}</MDXProvider>
				</Box>
			</Box>
			<ColorModeSwitch />
		</Surface>
	);
};
