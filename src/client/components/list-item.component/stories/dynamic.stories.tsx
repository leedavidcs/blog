import { ListItem } from "@/client/components";
import { ColorModeSwitch } from "@/client/components/color-mode-switch.component";
import { OrderedList } from "@chakra-ui/layout";
import React, { FC } from "react";

export default {
	title: "components/list-item/dynamic",
	component: ListItem
};

export const Standard: FC = () => {
	return (
		<>
			<OrderedList>
				<ListItem>Do this</ListItem>
				<ListItem>Then that</ListItem>
				<ListItem>Then that other thing</ListItem>
			</OrderedList>
			<ColorModeSwitch />
		</>
	);
};
