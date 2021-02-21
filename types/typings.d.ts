declare module "*.svg" {
	import React, { FC, SVGAttributes } from "react";

	export const ReactComponent: FC<SVGAttributes<SVGElement>>;

	const svgUrl: string;

	export default svgUrl;
}
