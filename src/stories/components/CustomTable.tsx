import { Table as BTable } from "react-bootstrap";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TableProps = {
  data: any;
  columns: any;
  backgroundColor?: string;
  textColor?: string;
  coloredRow?: "odd" | "even" | "none";
  onRowClick?: (id: string) => void;
};

const CustomTable = ({
  data = [],
  columns = [],
  backgroundColor = "",
  textColor = "",
  coloredRow = "odd",
  onRowClick,
}: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const array1 = table?.getHeaderGroups();

  const shouldColorRow = (isColoredRow: string, rowIndex: number) => {
    if (isColoredRow === "odd") {
      return rowIndex % 2 === 1;
    } else if (isColoredRow === "even") {
      return rowIndex % 2 === 0;
    }
    return false;
  };
  return (
    <div className="p-2">
      <BTable striped bordered hover responsive size="sm">
        <thead>
          {array1?.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup?.headers?.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel().rows?.map((row, cellIndex) => (
            <tr
              key={row.id}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row.id);
                }
              }}
            >
              {row?.getVisibleCells()?.map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    background: shouldColorRow(coloredRow, cellIndex)
                      ? backgroundColor
                      : "transparent",
                    color: shouldColorRow(coloredRow, cellIndex)
                      ? textColor
                      : "inherit",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </BTable>
    </div>
  );
};

export default CustomTable;
