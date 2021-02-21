import { ChakraProvider as _ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import React, { FC, ReactNode } from "react";

export interface IChakraProviderProps extends ChakraProviderProps {
	children?: ReactNode;
}

export const ChakraProvider: FC<IChakraProviderProps> = ({ children, ...restProviderProps }) => {
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
			<_ChakraProvider resetCSS={true} {...restProviderProps}>
				{children}
			</_ChakraProvider>
		</>
	);
};
