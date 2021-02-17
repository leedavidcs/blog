import { Welcome } from "@storybook/react/demo";

export default {
	title: "Welcome",
	component: Welcome
};

const Template = (args) => <Welcome {...args} />;
Template.args = {};

export const ToStorybook = Template.bind({});
ToStorybook.args = { ...Template.args };
