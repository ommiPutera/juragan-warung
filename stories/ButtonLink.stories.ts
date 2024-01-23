import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink } from "../components/ui/button";

const meta = {
  title: "Example/ButtonLink",
  component: ButtonLink,
  parameters: {
    variant: "default",
    size: "default",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default",
    href: "http://example.com",
  },
};
