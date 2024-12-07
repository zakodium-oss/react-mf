import type { Meta, StoryObj } from '@storybook/react';

import { MF } from '../src/index.js';

export default {
  title: 'MF',
  component: MF,
  args: {
    mf: 'Al2(SO4)3',
  },
} satisfies Meta<typeof MF>;

type Story = StoryObj<typeof MF>;

export const Basic: Story = {};

export const ClassName: Story = {
  args: {
    className: 'custom-css',
  },
  decorators: (Story) => (
    <div>
      <style>
        {`.custom-css {
            font-weight: bold;
            color: red;
          }`}
      </style>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
};

export const InlineStyle: Story = {
  args: {
    style: { color: 'navy', fontSize: 30 },
  },
};

export const Monospace: Story = {
  args: {
    style: { fontFamily: 'monospace' },
  },
};

export const ChargedSalt: Story = {
  args: {
    mf: '2Na+.SO4(--)',
  },
};
