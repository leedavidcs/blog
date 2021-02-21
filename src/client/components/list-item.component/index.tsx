import { ListItem as ChakraListItem, ListItemProps, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

export const ListItem: FC<ListItemProps> = (props) => {
	const { colorMode } = useColorMode();

	return <ChakraListItem color={colorMode === "light" ? "gray.600" : "gray.400"} {...props} />;
};
