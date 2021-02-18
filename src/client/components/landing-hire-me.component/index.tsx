import { EmailIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FC } from "react";

export const LandingHireMe: FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Text>Interested in hiring me?</Text>
			<Text>
				Get in touch:{" "}
				<ChakraLink
					color="blue.500"
					display="inline-flex"
					alignItems="center"
					isExternal={true}
					href="mailto:jobs.lee.david.cs@gmail.com"
				>
					jobs.lee.david.cs@gmail.com&nbsp;
					<EmailIcon />
				</ChakraLink>
			</Text>
		</Box>
	);
};
