import { FavoriteTechnologies } from "@/client/components/favorite-technologies.component";
import { LandingAvatar } from "@/client/components/landing-avatar.component";
import { LandingHireMe } from "@/client/components/landing-hire-me.component";
import { Box, BoxProps, Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FC } from "react";

const classes = {
	link: css`
		display: inline-flex;
		align-items: center;
	`
};

export const LandingIntro: FC<BoxProps> = (props) => {
	return (
		<Box {...props}>
			<Flex alignItems="center" mb={4}>
				<LandingAvatar mr={8} />
				<Box>
					<Text mb={2}>Personal blog by David Lee.</Text>
					<Text mb={2}>
						I&apos;m a Software Engineer who enjoys exploring different technologies,
						improving the developer experience and occasionally working on{" "}
						<ChakraLink
							css={classes.link}
							color="blue.500"
							isExternal={true}
							href="https://toastel.com"
						>
							Toastel.com{" "}
							<Image
								src="/assets/ico/toastel.favicon.ico"
								height={5}
								width={5}
								ml={1}
							/>
						</ChakraLink>
						.
					</Text>
				</Box>
			</Flex>
			<FavoriteTechnologies mb={4} />
			<LandingHireMe />
		</Box>
	);
};
