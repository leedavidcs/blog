import {
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
import { oneLine } from "common-tags";
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
		<Surface initial="initial" animate="enter" exit="exit" minHeight="100vh">
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
							date="02/18/2021"
						/>
						<PostLink
							header="Best GraphQL Stack for a TypeScript Dev"
							description="Urql + Nexus + Prisma + Codegen for great TypeScript DX"
							date="02/19/2021"
						/>
						<PostLink
							header="Exploring CSS in JS"
							description="Linarias to spruce up your website"
							date="02/20/2021"
						/>
						<PostLink
							header="TS Magic: Caller Configurable Return Types"
							description="Inspired by the Wizards of Prisma"
							date="02/21/2021"
						/>
						<PostLink
							header="Rate-Limiting your GraphQL Nexus Resolvers"
							description="Create a custom Nexus plugin with graphql-rate-limit"
							date="02/22/2021"
						/>
						<PostLink
							header="Mocking next/image in Storybook"
							description={oneLine`
								Don't let Storybook stop you from using Next.js Image Optimization
							`}
							date="02/23/2021"
						/>
						<PostLink
							header="Porting Openbase to SSR"
							description="Migrate gradually with Next.js"
							date="06/21/2021"
						/>
					</PostList>
				</Box>
			</Box>
		</Surface>
	);
};

Page.Layout = Fragment;

export default Page;
