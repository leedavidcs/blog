import { LinkIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";
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
	const href: string = useMemo(() => header.toLowerCase().split(/\s+/).join("-"), [header]);

	return (
		<LinkBox as="article" css={css} p={4} borderWidth={1} rounded="md" {...restBoxProps}>
			<LinkOverlay href={href}>
				<Heading as="h3" color="blue.500" fontSize="2xl" fontWeight={700} mb={2}>
					{header} <LinkIcon height={4} width={4} />
				</Heading>
			</LinkOverlay>
			<Box>
				<Text color="gray.600" fontSize="small">
					{dayjs(date).format("MMM DD, YYYY")}
				</Text>
				<Text>{description}</Text>
			</Box>
		</LinkBox>
	);
};
