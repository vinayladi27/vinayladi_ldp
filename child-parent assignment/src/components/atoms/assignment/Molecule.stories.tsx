import Molecule from './Molecule';
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
    title: "Form/Molecule",
    component: Molecule,
  } as ComponentMeta<typeof Molecule>;
  const template: ComponentStory<typeof Molecule> = (args) => <Molecule {...args} />
export const primary = template.bind({});
primary.args = {
  size:"small",
//   variantColor:"primary",
};