import { ColorModeSwitch } from "@/client/components/color-mode-switch.component";
import { Link } from "@/client/components/link.component";
import { MDXProvider } from "@/client/components/mdx-provider.component";
import { Surface } from "@/client/components/surface.component";
import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import NextLink from "next/link";
import { FC } from "react";

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
		<MDXProvider>
			<Surface height="100vh" {...restBoxProps}>
				<Box css={classes.content}>
					<NextLink href="/" passHref={true}>
						<Link
							color={colorMode === "light" ? "purple.500" : "purple.300"}
							fontSize="4xl"
							fontWeight={700}
						>
							lee.david.cs
						</Link>
					</NextLink>
					<Box mt={12}>{children}</Box>
				</Box>
				<ColorModeSwitch />
			</Surface>
		</MDXProvider>
	);
};
