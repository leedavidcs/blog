import { ColorModeScript } from "@chakra-ui/color-mode";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export class Document extends NextDocument {
	render = () => {
		return (
			<Html lang="en">
				<Head />
				<body>
					<ColorModeScript initialColorMode="system" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	};
}

export default Document;
