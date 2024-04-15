import { Meta, StoryObj } from '@storybook/angular';

import { HospitalComponent } from './hospital.component';

type ComponentWithCustomControls = HospitalComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Hospital',
  component: HospitalComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Hospital` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Hospital: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
