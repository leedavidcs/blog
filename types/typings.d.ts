declare module "*.svg" {
	import { FC, SVGAttributes } from "react";

	export const ReactComponent: FC<SVGAttributes<SVGElement>>;

	const svgUrl: string;

	export default svgUrl;
}
