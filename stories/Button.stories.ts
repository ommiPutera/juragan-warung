import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/ui/button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    variant: "default",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
  name: "Variant - Primary",
};
export const Default: Story = {
  args: {
    children: "Default",
  },
  name: "Variant - Default",
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
  name: "Variant - Secondary",
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary",
  },
  name: "Variant - Tertiary",
};
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
  name: "Variant - Danger",
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
  name: "Variant - Destructive",
};
export const Dashed: Story = {
  args: {
    variant: "dashed",
    children: "Dashed",
  },
  name: "Variant - Dashed",
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
  name: "Variant - Disabled",
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
  name: "Size - Small",
};
