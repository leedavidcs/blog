import { FavoriteTechnologies } from "@/client/components/favorite-technologies.component";
import { LandingAvatar } from "@/client/components/landing-avatar.component";
import { LandingHireMe } from "@/client/components/landing-hire-me.component";
import { Link } from "@/client/components/link.component";
import { Box, BoxProps, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

export const LandingIntro: FC<BoxProps> = (props) => {
	const { colorMode } = useColorMode();

	return (
		<Box {...props}>
			<Flex alignItems="center" mb={4}>
				<LandingAvatar mr={8} />
				<Box>
					<Text mb={2}>
						Personal blog by{" "}
						<Box as="span" color={colorMode === "light" ? "purple.500" : "purple.300"}>
							David Lee
						</Box>
						.
					</Text>
					<Text mb={2}>
						I&apos;m a Software Engineer who enjoys exploring different technologies,
						improving the developer experience and occasionally working on{" "}
						<Link isExternal={true} href="https://toastel.com">
							Toastel.com{" "}
							<Image
								alt="toastel icon"
								src="/assets/ico/toastel.favicon.ico"
								height={5}
								width={5}
								ml={1}
							/>
						</Link>
						.
					</Text>
				</Box>
			</Flex>
			<FavoriteTechnologies mb={4} />
			<LandingHireMe />
		</Box>
	);
};
