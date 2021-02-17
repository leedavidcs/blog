import { ColorModeScript } from "@chakra-ui/color-mode";
import { addons } from "@storybook/addons";
import { addParameters } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import { ChakraProvider } from "../src/client/components/chakra-provider.component";

const alphabeticSort = (a, b) => {
	const isSameKind: boolean = a[1].kind === b[1].kind;

	if (isSameKind) {
		return false;
	}

	const compared: boolean = a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

	return compared;
};

addons.setConfig({
	showRoots: true
});

addParameters({
	options: {
		storySort: alphabeticSort
	}
});

export const decorators = [
	(Story) => (
		<ChakraProvider>
			<ColorModeScript />
			<Story />
		</ChakraProvider>
	),
	withNextRouter({}),
];