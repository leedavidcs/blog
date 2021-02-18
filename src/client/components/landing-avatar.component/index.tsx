import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import React, { FC } from "react";

export const LandingAvatar: FC<AvatarProps> = (props) => {
	return (
		<Avatar src="/assets/jpeg/profile.jpg" name="David Lee" height={24} width={24} {...props} />
	);
};
