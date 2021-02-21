import { ColorModeSwitch, PostLayout } from "@/client/components";
import { ChakraProvider } from "@/client/components/chakra-provider.component";
import { cookieStorageManager, localStorageManager } from "@chakra-ui/color-mode";
import { AnimatePresence } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import NextHead from "next/head";
import { useRouter } from "next/router";
import React, { ComponentType } from "react";

interface ICustomAppProps extends Omit<AppProps, "Component"> {
	Component: NextComponentType<NextPageContext, any, {}> & { Layout?: ComponentType };
}

const App: NextComponentType<AppContext, AppInitialProps, ICustomAppProps & { cookies: any }> = ({
	Component,
	cookies,
	pageProps
}) => {
	const router = useRouter();

	const Layout: ComponentType = Component.Layout ?? PostLayout;

	return (
		<>
			<NextHead>
				<title key="title">lee.david.cs Blog</title>
				<meta key="description" name="description" content="David Lee blogs about code" />
				<meta key="og:type" property="og:type" content="website" />
				<meta key="og:title" property="og:title" content="lee.david.cs Blog" />
				<meta
					key="og:description"
					property="og:description"
					content="David Lee blogs about code"
				/>
			</NextHead>
			<ChakraProvider
				colorModeManager={
					typeof cookies === "string"
						? cookieStorageManager(cookies)
						: localStorageManager
				}
			>
				<ColorModeSwitch />
				<AnimatePresence exitBeforeEnter={true}>
					<Layout key={router.route}>
						<Component {...pageProps} />
					</Layout>
				</AnimatePresence>
			</ChakraProvider>
		</>
	);
};

export default App;
