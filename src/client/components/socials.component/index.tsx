import { ReactComponent as GithubIcon } from "@/assets/svg/github.favicon.svg";
import { Flex, FlexProps, Icon, Image, Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FC } from "react";

const classes = {
	link: css`
		display: flex;
		align-items: center;

		&:not(:last-child) {
			margin-right: 12px;
		}
	`
};

export const Socials: FC<FlexProps> = ({ ...props }) => {
	const { colorMode } = useColorMode();

	return (
		<Flex {...props}>
			<ChakraLink
				css={classes.link}
				display="inline-flex"
				color="blue.500"
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
			</ChakraLink>
			<ChakraLink
				css={classes.link}
				color="blue.500"
				isExternal={true}
				href="https://github.com/leedavidcs"
			>
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
			</ChakraLink>
			<ChakraLink
				css={classes.link}
				color="blue.500"
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
			</ChakraLink>
		</Flex>
	);
};
