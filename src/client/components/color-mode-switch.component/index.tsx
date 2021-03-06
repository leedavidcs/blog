import { Switch, SwitchProps, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

export const ColorModeSwitch: FC<SwitchProps> = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Switch
			aria-label="color mode switch"
			position="fixed"
			top="1rem"
			right="1rem"
			color="green"
			isChecked={isDark}
			onChange={toggleColorMode}
			{...props}
		/>
	);
};
