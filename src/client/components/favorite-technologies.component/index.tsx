import { ReactComponent as ReactIcon } from "@/assets/svg/react.favicon.svg";
import { Icon, Image, Link as ChakraLink, Text, TextProps } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FC } from "react";

const classes = {
	link: css`
		display: inline-flex;
		align-items: center;
	`
};

export const FavoriteTechnologies: FC<TextProps> = (props) => {
	return (
		<Text {...props}>
			My favorite technologies are{" "}
			<ChakraLink
				css={classes.link}
				color="blue.500"
				isExternal={true}
				href="https://reactjs.org/"
			>
				React{" "}
				<Icon
					role="img"
					aria-label="react icon"
					as={ReactIcon}
					height={4}
					width={4}
					ml={1}
				/>
			</ChakraLink>
			,{" "}
			<ChakraLink
				css={classes.link}
				color="blue.500"
				isExternal={true}
				href="https://www.typescriptlang.org/"
			>
				TypeScript{" "}
				<Image
					alt="typescript icon"
					src="/assets/png/typescript.favicon.png"
					height={4}
					width={4}
					ml={1}
				/>
			</ChakraLink>{" "}
			and{" "}
			<ChakraLink
				css={classes.link}
				color="blue.500"
				isExternal={true}
				href="https://graphql.org/"
			>
				GraphQL{" "}
				<Image
					alt="graphql icon"
					src="/assets/ico/graphql.favicon.ico"
					height={4}
					width={4}
					ml={1}
				/>
			</ChakraLink>
			.
		</Text>
	);
};
