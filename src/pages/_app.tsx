import { ChakraProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
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
			<ChakraProvider resetCSS={true}>
				<AnimateSharedLayout type="crossfade">
					<AnimatePresence>
						<Component {...pageProps} />
					</AnimatePresence>
				</AnimateSharedLayout>
			</ChakraProvider>
		</>
	);
};

export default App;
