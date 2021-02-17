import { ChakraProvider } from "@/client/components/chakra-provider.component";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return (
		<ChakraProvider>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					<Component {...pageProps} />
				</AnimatePresence>
			</AnimateSharedLayout>
		</ChakraProvider>
	);
};

export default App;
