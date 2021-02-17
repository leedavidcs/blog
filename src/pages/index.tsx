import { CTA, DarkModeSwitch, Footer, Hero, Main, Surface } from "@/client/components";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Code, Link as ChakraLink, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { NextPage } from "next";

export const Page: NextPage = () => (
	<Surface height="100vh">
		<Hero />
		<Main>
			<Text>
				Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
				<Code>typescript</Code>.
			</Text>

			<List spacing={3} my={0}>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="purple.500" />
					<ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
						Chakra UI <LinkIcon />
					</ChakraLink>
				</ListItem>
				<ListItem>
					<ListIcon as={CheckCircleIcon} color="purple.500" />
					<ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
						Next.js <LinkIcon />
					</ChakraLink>
				</ListItem>
			</List>
		</Main>
		<DarkModeSwitch />
		<Footer>
			<Text>Next ❤️ Chakra</Text>
		</Footer>
		<CTA />
	</Surface>
);

export default Page;
