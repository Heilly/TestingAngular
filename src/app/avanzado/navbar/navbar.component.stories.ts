import { Meta, StoryObj } from '@storybook/angular';

import { NavbarComponent } from './navbar.component';

type ComponentWithCustomControls = NavbarComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Navbar',
  component: NavbarComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Navbar` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Navbar: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
