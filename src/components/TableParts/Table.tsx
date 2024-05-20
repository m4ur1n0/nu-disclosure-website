// @/src/components/Table.tsx
import { styled } from "@stitches/react";
import { IData } from "../CompaniesTable";

import { TableHeader } from "./TableHeader2";
import { TableRow } from "./TableRow2";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: string;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: IData[];
  columns: IColumnType<IData>[];
}

const TableWrapper = styled("table", {
  borderCollapse: "collapse",
  border: "none",
  fontFamily: "GlacialIndifferenceRegular",
});

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <TableWrapper className='table-wrapper'>
      <thead className="table-header-container">
        <TableHeader columns={columns} />
      </thead>
      <div className="table-body">
        <tbody>
          <TableRow data={data} columns={columns} />
        </tbody>
      </div>
    </TableWrapper>
  );
}