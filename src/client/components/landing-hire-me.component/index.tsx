import { Link } from "@/client/components/link.component";
import { EmailIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export const LandingHireMe: FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Text>Interested in hiring me?</Text>
			<Text>
				Get in touch:{" "}
				<Link isExternal={true} href="mailto:jobs.lee.david.cs@gmail.com">
					jobs.lee.david.cs@gmail.com&nbsp;
					<EmailIcon />
				</Link>
			</Text>
		</Box>
	);
};
