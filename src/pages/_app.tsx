import { PostLayout } from "@/client/components";
import { ChakraProvider } from "@/client/components/chakra-provider.component";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import React, { ComponentType, Fragment } from "react";

interface ICustomAppProps extends Omit<AppProps, "Component"> {
	Component: NextComponentType<NextPageContext, any, {}> & { Layout?: ComponentType };
}

const App: NextComponentType<AppContext, AppInitialProps, ICustomAppProps> = ({
	Component,
	pageProps
}) => {
	const Layout: ComponentType = PostLayout ?? Fragment;

	return (
		<ChakraProvider>
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AnimatePresence>
			</AnimateSharedLayout>
		</ChakraProvider>
	);
};

export default App;
