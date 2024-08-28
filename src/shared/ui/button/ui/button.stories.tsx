import type { StoryObj, Meta } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Содержимое кнопки',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      description: 'Тип кнопки',
      table: {
        defaultValue: { summary: 'button' },
      },
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
    },
    size: {
      description: 'Размер шрифта и внутренних отступов кнопки',
      table: {
        defaultValue: { summary: 'm' },
      },
      control: 'inline-radio',
    },
    disabled: {
      description: 'Неактивное состояние кнопки',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      description: 'Добавление собственного класса для дополнительной стилизации',
    },
    onClick: {
      description: 'Обработчик события click',
    },
  },
  args: {
    children: 'Button',
    type: 'button',
    size: 'l',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Sandbox: Story = {};

export const PrimaryL: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Story args={{ children: 'Active', size: 'l' }} />
        <Story args={{ children: 'Disabled',  size: 'l', disabled: true }} />
      </div>
    ),
  ],
};

export const PrimaryM: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Story args={{ children: 'Active', size: 'm' }} />
        <Story args={{ children: 'Disabled',  size: 'm', disabled: true }} />
      </div>
    ),
  ],
};


