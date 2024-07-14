import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};
