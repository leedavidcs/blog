import { useColorMode } from "@chakra-ui/color-mode";
import { LinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Heading,
	LinkBox,
	LinkOverlay,
	ListItem,
	ListItemProps,
	Text
} from "@chakra-ui/layout";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import NextLink from "next/link";
import React, { FC, useMemo } from "react";

export interface IPostLinkProps extends ListItemProps {
	date: string;
	description: string;
	header: string;
}

export const PostLink: FC<IPostLinkProps> = ({
	css,
	date,
	description,
	header,
	...restListItemProps
}) => {
	const { colorMode } = useColorMode();

	const href: string = useMemo(() => `/posts/${header.toLowerCase().split(/\s+/).join("-")}`, [
		header
	]);

	return (
		<ListItem
			as={motion.li}
			variants={{
				initial: {
					scale: 0.96,
					y: 30,
					opacity: 0
				},
				enter: {
					scale: 1,
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.5,
						ease: [0.48, 0.15, 0.25, 0.96]
					}
				},
				exit: {
					scale: 0.5,
					y: 20,
					opacity: 0,
					transition: {
						duration: 0.2,
						ease: [0.48, 0.15, 0.25, 0.96]
					}
				}
			}}
			{...(restListItemProps as any)}
		>
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
			>
				<NextLink href={href} passHref={true}>
					<LinkOverlay>
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
				</NextLink>
				<Box>
					<Text color={colorMode === "light" ? "gray.600" : "gray.400"} fontSize="small">
						{dayjs(date).format("MMM DD, YYYY")}
					</Text>
					<Text>{description}</Text>
				</Box>
			</LinkBox>
		</ListItem>
	);
};
