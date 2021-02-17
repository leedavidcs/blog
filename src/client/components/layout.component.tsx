import { CSSProperties, FC } from "react";

export interface ILayoutProps {
	className?: string;
	style?: CSSProperties;
}

export const Layout: FC<ILayoutProps> = ({ className, style }) => {
	return <div />;
};
