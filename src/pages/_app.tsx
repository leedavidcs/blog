import { PostLayout } from "@/client/components";
import { ChakraProvider } from "@/client/components/chakra-provider.component";
import { cookieStorageManager, localStorageManager } from "@chakra-ui/color-mode";
import { AnimatePresence } from "framer-motion";
import { NextComponentType, NextPageContext } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import NextHead from "next/head";
import React, { ComponentType } from "react";

interface ICustomAppProps extends Omit<AppProps, "Component"> {
	Component: NextComponentType<NextPageContext, any, {}> & { Layout?: ComponentType };
}

const App: NextComponentType<AppContext, AppInitialProps, ICustomAppProps & { cookies: any }> = ({
	Component,
	cookies,
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
			<ChakraProvider
				colorModeManager={
					typeof cookies === "string"
						? cookieStorageManager(cookies)
						: localStorageManager
				}
			>
				<Layout>
					<AnimatePresence exitBeforeEnter={true}>
						<Component {...pageProps} />
					</AnimatePresence>
				</Layout>
			</ChakraProvider>
		</>
	);
};

export const getServerSideProps = ({ req }) => {
	return {
		props: {
			cookies: req.headers.cookie ?? ""
		}
	};
};

export default App;
