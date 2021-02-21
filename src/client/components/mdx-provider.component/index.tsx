import { CodeBlock, ICodeBlockProps } from "@/client/components/code-block.component";
import { ListItem } from "@/client/components/list-item.component";
import { LinkIcon } from "@chakra-ui/icons";
import {
	Code,
	Heading,
	Image,
	Link as ChakraLink,
	ListItemProps,
	ListProps,
	OrderedList,
	Text,
	UnorderedList
} from "@chakra-ui/react";
import { MDXProvider as _MDXProvider } from "@mdx-js/react";
import NextLink from "next/link";
import React, {
	AnchorHTMLAttributes,
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	ReactNode,
	useCallback
} from "react";

export interface IMDXProviderProps {
	children?: ReactNode;
}

export const MDXProvider: FC<IMDXProviderProps> = ({ children }) => {
	const toScrollId = useCallback(
		(text: string) =>
			text
				.replace(/\s+/g, "-")
				.replace(/[^a-zA-Z0-9-]/g, "")
				.toLowerCase(),
		[]
	);

	const getHeaderType = useCallback(
		(type: keyof JSX.IntrinsicElements) => {
			const headerType: FC = ({ children: headerText, ...props }) => (
				<NextLink href={`#${toScrollId(headerText as string)}`} passHref={true}>
					<ChakraLink id={toScrollId(headerText as string)}>
						<Heading
							as={type}
							fontSize={
								type === "h1"
									? "4xl"
									: type === "h2"
									? "3xl"
									: type === "h3"
									? "2xl"
									: type === "h4"
									? "xl"
									: type === "h5"
									? "larger"
									: "large"
							}
							mb="0.8em"
							{...props}
						>
							{headerText}
							<LinkIcon height="0.5em" width="0.5em" ml="0.3em" />
						</Heading>
					</ChakraLink>
				</NextLink>
			);

			headerType.displayName = type.toUpperCase();

			return headerType;
		},
		[toScrollId]
	);

	const a: FC<
		DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
	> = useCallback(
		({ children: linkText, href = "", ...props }) => (
			<NextLink {...props} href={href} passHref={true}>
				<ChakraLink color="blue.500">{linkText}</ChakraLink>
			</NextLink>
		),
		[]
	);

	const code: FC<ICodeBlockProps> = useCallback((props) => <CodeBlock mb={4} {...props} />, []);

	const li: FC<ListItemProps> = useCallback((props) => <ListItem mb={1} {...props} />, []);

	const ol: FC<ListProps> = useCallback((props) => <OrderedList mb={4} {...props} />, []);

	const p: FC<
		DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
	> = useCallback(({ children: pText, ...props }) => {
		return (
			<Text as="p" mb="0.8em" {...props}>
				{pText}
			</Text>
		);
	}, []);

	const pre: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = useCallback(
		(props) => <div {...props} />,
		[]
	);

	const ul: FC<ListProps> = useCallback((props) => <UnorderedList mb={4} {...props} />, []);

	return (
		<_MDXProvider
			components={{
				a,
				code,
				h1: getHeaderType("h1"),
				h2: getHeaderType("h2"),
				h3: getHeaderType("h3"),
				h4: getHeaderType("h4"),
				h5: getHeaderType("h5"),
				h6: getHeaderType("h6"),
				image: Image,
				inlineCode: Code,
				li,
				ol,
				p,
				pre,
				ul
			}}
		>
			{children}
		</_MDXProvider>
	);
};
