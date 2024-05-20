// @/src/components/TableRow.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@stitches/react";
import { useState } from "react";

import { IColumnType } from "./Table";
import { TableRowCell } from "./TableRowCell";
import { IData } from "../CompaniesTable";


interface Props<T> {
  data: IData[];
  columns: IColumnType<IData>[];
}

const TableRowItemEven = styled("tr", {
  // outline : "1px solid black",

  fontFamily: "'GlacialIndifferenceRegular', sans-serif",

  cursor: "pointer",
  backgroundColor: "#e3e3e3",

  "&:hover": {
    backgroundColor: "#cdbfd9",
  },

  "& td": {
    fontSize: "1.3vw",
    padding: "1.2%"
  },
  width: "100%"
});

const TableRowItemOdd = styled("tr", {
  // outline : "1px solid black",

  fontFamily: "'GlacialIndifferenceRegular', sans-serif",

  cursor: "pointer",
  backgroundColor: "white",

  // transition: "transform 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: "#cdbfd9",
    // transform : "scale(1.05)",
    // boxShadow : "0px 0px 5px rgba(0, 0, 0, 0.4)",
    // zIndex: 999
  },

  "& td": {
    fontSize: "1.3vw",
    padding: "1.2%"
  },

});

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {

  const [DBoxVisibility, setDBoxVisibility] = useState(false);
  const [DBoxId, setDBoxId] = useState<IData>(data[0]);
  const makeVisible = (i : IData) => {
    if (DBoxVisibility) {
      setDBoxVisibility(false);
    }
    setDBoxVisibility(true);
    setDBoxId(i);
  };
  const makeGone = () => {
    setDBoxVisibility(false);
  }


  return (
    <>
      {data.map((item, itemIndex) => (
        <>
          {(itemIndex % 2 == 0) ?
            <div className="table-row"
            onClick={() => makeVisible(item)}>
              <TableRowItemEven key={`table-body-${itemIndex}`} className={(itemIndex % 2 == 0) ? 'table-row-item-even' : 'table-row-item-odd'}>
              {columns.map((column, columnIndex) => (
                <TableRowCell
                  key={`table-row-cell-${columnIndex}`}
                  item={item}
                  column={column}
                />
              ))}
              </TableRowItemEven>
            </div>
            :
            <div className="table-row"
            onClick={() => makeVisible(item)}>
              <TableRowItemOdd key={`table-body-${itemIndex}`} className={(itemIndex % 2 == 0) ? 'table-row-item-even' : 'table-row-item-odd'}>
              {columns.map((column, columnIndex) => (
                <TableRowCell
                  key={`table-row-cell-${columnIndex}`}
                  item={item}
                  column={column}
                />
              ))}
              </TableRowItemOdd>
            </div>
          }
            {/* <div className="seperator"/> */}
        </>
      ))}
      <div className={`link-dialogue-box ${DBoxVisibility ? "link-db-visible" : ""}`}>
        <div className='link-dialogue-box-close'
        onClick={makeGone}>
          <FontAwesomeIcon icon={faX} className='dialogue-box-close-x-button'/>
        </div>
          <h1 className="info-box-title">{DBoxId.companyName}</h1>
          <h2 className="info-box-industry">{DBoxId.industry.toUpperCase()}</h2>
          <h3 className="info-box-subtitle">{`Making up ${DBoxId.percentage} of Northwestern's total investment portfolio`}</h3>
          
          <div className="info-box-link-box">
            <h3 className="link-box-title">Why Divest?</h3>
            <div className="seperator"/>
            <ul className="link-list">
              {DBoxId.link.map((url, idx) => (
                <li key={idx} className="link-in-link-list">
                  <a href={url} target="_blank" className="actual-fucking-link">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  );
}