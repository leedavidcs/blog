import { ReactComponent as ReactIcon } from "@/assets/svg/react.favicon.svg";
import { Image } from "@/client/components/image.component";
import { Link } from "@/client/components/link.component";
import { Icon, Text, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";

export const SpecializeTechnologies: FC<TextProps> = (props) => {
	return (
		<Text {...props}>
			I specialize working with{" "}
			<Link isExternal={true} href="https://reactjs.org/">
				React{" "}
				<Icon
					role="img"
					aria-label="react icon"
					as={ReactIcon}
					height={4}
					width={4}
					ml={1}
				/>
			</Link>
			,{" "}
			<Link isExternal={true} href="https://www.typescriptlang.org/">
				TypeScript{" "}
				<Image
					alt="typescript icon"
					src="/assets/png/typescript.favicon.png"
					height={4}
					width={4}
					ml={1}
				/>
			</Link>{" "}
			,{" "}
			<Link isExternal={true} href="https://graphql.org/">
				GraphQL{" "}
				<Image
					alt="graphql icon"
					src="/assets/ico/graphql.favicon.ico"
					height={4}
					width={4}
					ml={1}
				/>
			</Link>{" "}
			and{" "}
			<Link isExternal={true} href="https://nodejs.org/">
				Node.js{" "}
				<Image
					alt="nodejs icon"
					src="/assets/ico/nodejs.favicon.ico"
					height={4}
					width={4}
					ml={1}
				/>
			</Link>
			.
		</Text>
	);
};
