// @/src/components/TableRowCell.tsx
import { styled } from "@stitches/react";
import get from "lodash.get";

import { IColumnType } from "./Table";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

const TableCell = styled("td", {

  fontSize: 16,
  color: "grey",
  height: '4vw',

});

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <TableCell className={`table-row-cell ${column.key}-row-cell`}>{column.render ? column.render(column, item) : value}</TableCell>
  );
}