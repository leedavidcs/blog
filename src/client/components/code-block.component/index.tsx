import { Box, BoxProps } from "@chakra-ui/layout";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import React, { FC, useMemo } from "react";

export interface ICodeBlockProps extends BoxProps {
	children?: string;
	className?: string;
}

export const CodeBlock: FC<ICodeBlockProps> = ({
	children = "",
	className: _className = "language-tsx",
	...restBoxProps
}) => {
	const language = useMemo(() => _className.replace(/language-/, ""), [_className]) as Language;

	return (
		<Highlight {...defaultProps} code={children} language={language} theme={theme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Box
					as="pre"
					p="0.5rem"
					border={1}
					rounded="md"
					fontSize={"0.875rem"}
					{...restBoxProps}
					className={className}
					style={style}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</Box>
			)}
		</Highlight>
	);
};
