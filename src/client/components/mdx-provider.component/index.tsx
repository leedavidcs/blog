import { CodeBlock } from "@/client/components/code-block.component";
import { LinkIcon } from "@chakra-ui/icons";
import { Code, Heading, Image, Link as ChakraLink, List, ListItem, Text } from "@chakra-ui/react";
import { MDXProvider as _MDXProvider } from "@mdx-js/react";
import NextLink from "next/link";
import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode, useCallback } from "react";

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
				<NextLink href={toScrollId(headerText as string)} passHref={true}>
					<ChakraLink id={toScrollId(headerText as string)}>
						<Heading as={type} {...props}>
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

	return (
		<_MDXProvider
			components={{
				a,
				code: CodeBlock,
				h1: getHeaderType("h1"),
				h2: getHeaderType("h2"),
				h3: getHeaderType("h3"),
				h4: getHeaderType("h4"),
				h5: getHeaderType("h5"),
				h6: getHeaderType("h6"),
				image: Image,
				inlineCode: Code,
				li: ListItem,
				p: Text,
				pre: CodeBlock,
				ul: List
			}}
		>
			{children}
		</_MDXProvider>
	);
};
