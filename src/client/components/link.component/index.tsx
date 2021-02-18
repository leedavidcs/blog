import { Link as ChakraLink, LinkProps, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { forwardRef } from "react";

const StyledLink = styled(ChakraLink)`
	display: inline-flex;
	align-items: center;
`;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ ...props }, ref) => {
	const { colorMode } = useColorMode();

	return (
		<StyledLink color={colorMode === "light" ? "blue.600" : "teal.400"} {...props} ref={ref} />
	);
});

Link.displayName = "Link";
