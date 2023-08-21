import Table from "./components/CustomTable";
import type { Meta, StoryObj } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  { Name: "John", Age: 25, Country: "USA", id: "1" },
  { Name: "Alice", Age: 30, Country: "Canada", id: "2" },
  { Name: "Bob", Age: 22, Country: "UK", id: "3" },
];

const meta: Meta<typeof Table> = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    columns: columns,
    data: data,
    backgroundColor: "green",
    textColor: "black",
    coloredRow: "odd",
    onRowClick: (id) => {
      console.log("Row clicked with id:", id);
    },
  },
};
