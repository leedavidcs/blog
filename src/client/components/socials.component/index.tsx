import { ReactComponent as GithubIcon } from "@/assets/svg/github.favicon.svg";
import { Image } from "@/client/components/image.component";
import { Link } from "@/client/components/link.component";
import { Box, BoxProps, Icon, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { FC } from "react";

const classes = {
	link: css`
		&:not(:last-child) {
			margin-right: 12px;
		}
	`
};

export const Socials: FC<BoxProps> = ({ ...props }) => {
	const { colorMode } = useColorMode();

	return (
		<Box {...props}>
			<Link
				css={classes.link}
				display="inline-flex"
				isExternal={true}
				href="https://twitter.com/i3Daly"
			>
				Twitter{" "}
				<Image
					alt="twitter icon"
					src="/assets/ico/twitter.favicon.ico"
					height={4}
					width={4}
					ml={1}
				/>
			</Link>
			<Link css={classes.link} isExternal={true} href="https://github.com/leedavidcs">
				GitHub{" "}
				<Icon
					role="img"
					aria-label="github icon"
					as={GithubIcon}
					color={colorMode === "light" ? "black" : "white"}
					height={4}
					width={4}
					ml={1}
				/>
			</Link>
			<Link
				css={classes.link}
				isExternal={true}
				href="https://www.linkedin.com/in/leedavidcs/"
			>
				LinkedIn{" "}
				<Image
					alt="linkedin icon"
					src="/assets/ico/linkedin.favicon.ico"
					height={4}
					width={4}
					ml={1}
				/>
			</Link>
		</Box>
	);
};
