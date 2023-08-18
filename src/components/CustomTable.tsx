import { Table as BTable } from "react-bootstrap";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const CustomTable = ({ data, columns }: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const array1 = table?.getHeaderGroups();
  console.log(array1, "array1");
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
          {table?.getRowModel().rows?.map((row) => (
            <tr key={row.id}>
              {row?.getVisibleCells()?.map((cell) => (
                <td key={cell.id}>
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
