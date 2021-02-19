import { NextPage } from "next";
import { ComponentType } from "react";

export * from "./chakra-provider.component";
export * from "./code-block.component";
export * from "./color-mode-switch.component";
export * from "./favorite-technologies.component";
export * from "./image.component";
export * from "./landing-avatar.component";
export * from "./landing-hire-me.component";
export * from "./landing-intro.component";
export * from "./link.component";
export * from "./list-item.component";
export * from "./mdx-provider.component";
export * from "./post-layout.component";
export * from "./post-link.component";
export * from "./socials.component";
export * from "./surface.component";

export type PageType<P = {}, IP = P> = NextPage<P, IP> & {
	Layout?: ComponentType;
};
