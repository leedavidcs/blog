import { useColorMode } from "@chakra-ui/color-mode";
import { Box, BoxProps } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import vsDark from "prism-react-renderer/themes/vsDark";
import React, { FC, useMemo } from "react";

export interface ICodeBlockProps extends BoxProps {
	children?: string;
	className?: string;
}

const Line = styled.div`
	display: table-row;
`;

const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

const LineContent = styled.span`
	display: table-cell;
`;

export const CodeBlock: FC<ICodeBlockProps> = ({
	children = "",
	className: _className = "language-tsx",
	...restBoxProps
}) => {
	const { colorMode } = useColorMode();

	const language = useMemo(() => _className.replace(/language-/, ""), [_className]) as Language;

	return (
		<Highlight
			{...defaultProps}
			code={children.trim()}
			language={language}
			theme={colorMode === "light" ? vsDark : dracula}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Box
					as="pre"
					p="0.5rem"
					border={1}
					rounded="md"
					overflow="auto"
					fontSize={"0.875rem"}
					{...restBoxProps}
					className={className}
					style={style}
				>
					{tokens.map((line, i) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</LineContent>
						</Line>
					))}
				</Box>
			)}
		</Highlight>
	);
};
