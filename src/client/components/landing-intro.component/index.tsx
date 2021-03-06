import { FavoriteTechnologies } from "@/client/components/favorite-technologies.component";
import { Image } from "@/client/components/image.component";
import { LandingAvatar } from "@/client/components/landing-avatar.component";
import { LandingHireMe } from "@/client/components/landing-hire-me.component";
import { Link } from "@/client/components/link.component";
import { SpecializeTechnologies } from "@/client/components/specialize-technologies.component";
import { Box, BoxProps, Flex, Text, useColorMode } from "@chakra-ui/react";
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
						improving the developer experience and working on{" "}
						<Link isExternal={true} href="https://openbase.com">
							Openbase.com{" "}
							<Image
								alt="openbase icon"
								src="/assets/ico/openbase.favicon.ico"
								height={5}
								width={5}
								ml={1}
							/>
						</Link>
						.
					</Text>
				</Box>
			</Flex>
			<SpecializeTechnologies mb={2} />
			<FavoriteTechnologies mb={4} />
			<LandingHireMe />
		</Box>
	);
};
