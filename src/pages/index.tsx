import { ColorModeSwitch, LandingIntro, PostLink, Socials, Surface } from "@/client/components";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { NextPage } from "next";

const classes = {
	container: css`
		box-sizing: border-box;
		margin: 32px auto;
		padding: 24px 12px;
		max-width: 640px;
		width: 100%;
	`
};

export const Page: NextPage = () => {
	return (
		<Surface height="100vh">
			<Box css={classes.container}>
				<Heading as="h1" fontSize="4xl" mb={4}>
					lee.david.cs
				</Heading>
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
				<ColorModeSwitch />
			</Box>
		</Surface>
	);
};

export default Page;
