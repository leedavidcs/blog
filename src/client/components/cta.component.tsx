import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { Surface } from "./surface.component";

export const CTA = () => (
	<Surface flexDirection="row" position="fixed" bottom="0" width="100%" maxWidth="48rem" py={2}>
		<ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
			<Button width="100%" variant="outline" colorScheme="purple">
				chakra-ui
			</Button>
		</ChakraLink>
		<ChakraLink
			isExternal
			href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
			flexGrow={3}
			mx={2}
		>
			<Button width="100%" variant="solid" colorScheme="purple">
				View Repo
			</Button>
		</ChakraLink>
	</Surface>
);
