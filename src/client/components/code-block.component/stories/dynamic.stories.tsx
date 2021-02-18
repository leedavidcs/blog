import { CodeBlock } from "@/client/components";
import { codeBlock } from "common-tags";
import { FC } from "react";

export default {
	title: "components/code-block/dynamic",
	component: CodeBlock
};

const code = codeBlock`
import React, { FC } from "react";

export const Button: FC = (props) => <button {...props} />;
`;

export const Standard: FC = () => {
	return <CodeBlock>{code}</CodeBlock>;
};
