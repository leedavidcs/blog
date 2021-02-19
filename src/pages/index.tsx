import {
	ColorModeSwitch,
	LandingIntro,
	Link,
	PageType,
	PostLink,
	PostList,
	Socials,
	Surface
} from "@/client/components";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import NextLink from "next/link";
import React, { Fragment } from "react";

const classes = {
	content: css`
		box-sizing: border-box;
		margin: 32px auto;
		padding: 24px 12px;
		max-width: 640px;
		width: 100%;
	`
};

export const Page: PageType = () => {
	const { colorMode } = useColorMode();

	return (
		<Surface initial="initial" animate="enter" exit="exit" height="100vh">
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
					<PostList spacing={4} my={0}>
						<PostLink
							header="Writing Emails in React"
							description="No more string emails; made possible with MJML"
							date="02/18/2020"
						/>
						<PostLink
							header="Selecting my GraphQL Stack"
							description="Urql + Nexus + Prisma + Codegen for great TypeScript DX"
							date="02/19/2020"
						/>
					</PostList>
				</Box>
			</Box>
			<ColorModeSwitch />
		</Surface>
	);
};

Page.Layout = Fragment;

export default Page;
