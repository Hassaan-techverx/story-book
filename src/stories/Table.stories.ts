import Table from "../components/CustomTable";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const columns = [
  {
    header: "Name",
    accessorKey: "Name",
  },
  {
    header: "Age",
    accessorKey: "Age",
  },
  {
    header: "Country",
    accessorKey: "Country",
  },
];
const data = [
  { Name: "John", Age: 25, Country: "USA" },
  { Name: "Alice", Age: 30, Country: "Canada" },
  { Name: "Bob", Age: 22, Country: "UK" },
];

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    columns: columns,
    data: data,
  },
};
