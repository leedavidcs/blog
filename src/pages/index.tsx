import {
	ColorModeSwitch,
	LandingIntro,
	Link,
	PostLink,
	Socials,
	Surface
} from "@/client/components";
import { Box, Heading, List, ListItem, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { NextPage } from "next";
import NextLink from "next/link";

const classes = {
	content: css`
		box-sizing: border-box;
		margin: 32px auto;
		padding: 24px 12px;
		max-width: 640px;
		width: 100%;
	`
};

export const Page: NextPage = () => {
	const { colorMode } = useColorMode();

	return (
		<Surface height="100vh">
			<Box css={classes.content}>
				<NextLink href="/" passHref={true}>
					<Link color={colorMode === "light" ? "purple.500" : "purple.300"}>
						<Heading as="h1" fontSize="4xl" mb={4}>
							lee.david.cs
						</Heading>
					</Link>
				</NextLink>
				<Socials mb={4} />
				<LandingIntro />
				<Box>
					<Heading as="h2" fontSize="2xl" mt={12} mb={4}>
						Posts
					</Heading>
					<List spacing={4} my={0}>
						<ListItem>
							<PostLink
								header="My First Post"
								description="A meaningful description"
								date="01/01/2021"
							/>
						</ListItem>
						<ListItem>
							<PostLink
								header="My Second Post"
								description="A meaningful description"
								date="01/01/2021"
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
			<ColorModeSwitch />
		</Surface>
	);
};

export default Page;
