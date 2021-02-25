import { ReactComponent as LinariaIcon } from "@/assets/svg/linaria.favicon.svg";
import { Image } from "@/client/components/image.component";
import { Link } from "@/client/components/link.component";
import { Box, BoxProps, Icon, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export const FavoriteTechnologies: FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Text>Other favorites include:</Text>
			<Text>
				<Link isExternal={true} href="https://nextjs.org/">
					Next.js{" "}
					<Image
						alt="nextjs icon"
						src="/assets/ico/nextjs.favicon.ico"
						height={4}
						width={4}
						ml={1}
					/>
				</Link>{" "}
				,{" "}
				<Link isExternal={true} href="https://formidable.com/open-source/urql/">
					Urql{" "}
					<Image
						alt="urql icon"
						src="/assets/png/urql.favicon.png"
						height={4}
						width={4}
						ml={1}
					/>
				</Link>{" "}
				,{" "}
				<Link isExternal={true} href="https://nexusjs.org/">
					Nexus{" "}
					<Image
						alt="nexus icon"
						src="/assets/png/nexus.favicon.png"
						height={4}
						width={4}
						ml={1}
					/>
				</Link>{" "}
				,{" "}
				<Link isExternal={true} href="https://www.prisma.io/">
					Prisma{" "}
					<Image
						alt="prisma icon"
						src="/assets/png/prisma.favicon.png"
						height={4}
						width={4}
						ml={1}
					/>
				</Link>{" "}
				,{" "}
				<Link isExternal={true} href="https://linaria.dev/">
					Linaria{" "}
					<Icon
						role="img"
						aria-label="linaria icon"
						as={LinariaIcon}
						height={4}
						width={4}
						ml={1}
						color="#ED2D66"
					/>
				</Link>{" "}
				,{" "}
				<Link isExternal={true} href="https://storybook.js.org/">
					Storybook{" "}
					<Image
						alt="storybook icon"
						src="/assets/png/storybook.favicon.png"
						height={4}
						width={4}
						ml={1}
					/>
				</Link>{" "}
				and more!
			</Text>
		</Box>
	);
};
