import type { StoryObj, Meta } from '@storybook/react';
import { Counter } from './counter';

const meta: Meta<typeof Counter> = {
  title: 'UI/Counter',
  component: Counter,
  argTypes: {
    counter: {
      description: 'Количество элементов',
      table: {
        type: { summary: 'number' },
      },
    },
    className: {
      description: 'Добавление собственного класса для дополнительной стилизации',
    },
    size: {
      description: 'Размер кнопки',
      table: {
        defaultValue: { summary: 's' },
      },
      control: 'inline-radio',
    },
  },
  args: {
    counter: 1,
    size: 's',
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {};

export const CounterMany: Story = {
  decorators: [
    (Story) => (
      <>
        <h3>Если много товаров: </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <Story args={{ counter: 5, size: 'l' }} />
          <Story args={{ counter: 5, size: 'l' }} />
        </div>
      </>
    ),
  ],
};


