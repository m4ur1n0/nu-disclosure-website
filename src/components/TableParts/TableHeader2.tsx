// @/src/components/TableHeader.tsx
import { styled } from "@stitches/react";

import { IColumnType } from "./Table";

interface Props<T> {
  columns: IColumnType<T>[];
}

const TableHeaderCell = styled("th", {
  backgroundColor: "#f1f1f1",
  alignContent: "center",
  paddingLeft: "3%",
  height: "100%",
  fontWeight: 500,
  textAlign: "left",
  fontFamily: "'GlacialIndifferenceRegular', sans-serif",
  fontSize: "1.8vw",
  // color: "#828282"
  color: "black",
  "&:first-child": {
    borderTopLeftRadius: 10,
    fontWeight: 600
    
  },
  "&:last-child": {
    borderTopRightRadius: 10,
  },
});

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr className='table-header'>
      {columns.map((column, columnIndex) => (
        <TableHeaderCell
          key={`table-head-cell-${columnIndex}`}
          style={{ width: column.width }}
          className={`table-header-cell ${column.title}-table-header-cell`}
        >
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
}