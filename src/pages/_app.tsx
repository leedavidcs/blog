import { PostLayout } from "@/client/components";
import { ChakraProvider } from "@/client/components/chakra-provider.component";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import NextHead from "next/head";
import React, { ComponentType } from "react";

interface ICustomAppProps extends Omit<AppProps, "Component"> {
	Component: NextComponentType<NextPageContext, any, {}> & { Layout?: ComponentType };
}

const App: NextComponentType<AppContext, AppInitialProps, ICustomAppProps> = ({
	Component,
	pageProps
}) => {
	const Layout: ComponentType = Component.Layout ?? PostLayout;

	return (
		<>
			<NextHead>
				<title key="title">lee.david.cs</title>
				<meta key="description" name="description" content="David Lee blogs about code" />
				<meta key="og:type" property="og:type" content="website" />
				<meta key="og:title" property="og:title" content="lee.david.cs" />
				<meta
					key="og:description"
					property="og:description"
					content="David Lee blogs about code"
				/>
			</NextHead>
			<ChakraProvider>
				<AnimateSharedLayout type="crossfade">
					<AnimatePresence>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AnimatePresence>
				</AnimateSharedLayout>
			</ChakraProvider>
		</>
	);
};

export default App;
