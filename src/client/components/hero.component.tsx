import { Flex, Heading } from "@chakra-ui/react";
import { CSSProperties, FC } from "react";

export interface IHeroProps {
	className?: string;
	style?: CSSProperties;
	title?: string;
}

export const Hero: FC<IHeroProps> = ({ className, title = "with-chakra-ui-typescript", style }) => (
	<Flex
		className={className}
		justifyContent="center"
		alignItems="center"
		height="100vh"
		style={style}
	>
		<Heading fontSize="6vw">{title}</Heading>
	</Flex>
);
