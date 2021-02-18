import { useColorMode } from "@chakra-ui/color-mode";
import { LinkIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { FC, useMemo } from "react";

export interface IPostLinkProps extends BoxProps {
	date: string;
	description: string;
	header: string;
}

export const PostLink: FC<IPostLinkProps> = ({
	css,
	date,
	description,
	header,
	...restBoxProps
}) => {
	const { colorMode } = useColorMode();

	const href: string = useMemo(() => header.toLowerCase().split(/\s+/).join("-"), [header]);

	return (
		<LinkBox
			as={motion.article}
			css={css}
			p={4}
			borderWidth={1}
			boxShadow="md"
			rounded="md"
			variants={{
				default: {
					scale: 1
				},
				hover: {
					scale: 0.975
				}
			}}
			whileHover="hover"
			{...(restBoxProps as any)}
		>
			<LinkOverlay href={href}>
				<Heading
					as="h3"
					color={colorMode === "light" ? "blue.600" : "teal.400"}
					fontSize="2xl"
					fontWeight={700}
					mb={2}
				>
					{header} <LinkIcon height={4} width={4} />
				</Heading>
			</LinkOverlay>
			<Box>
				<Text color={colorMode === "light" ? "gray.600" : "gray.400"} fontSize="small">
					{dayjs(date).format("MMM DD, YYYY")}
				</Text>
				<Text>{description}</Text>
			</Box>
		</LinkBox>
	);
};
