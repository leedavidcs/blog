import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import React, { FC, ReactNode } from "react";

export interface IChakraProviderProps {
	children?: ReactNode;
}

export const ChakraProvider: FC<IChakraProviderProps> = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					html,
					body {
						margin: 0;
					}
				`}
			/>
			<_ChakraProvider resetCSS={true}>{children}</_ChakraProvider>
		</>
	);
};
