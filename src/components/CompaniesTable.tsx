// import React from 'react'
// import TableHeader from './TableHeader'
// import TableRow, { dataObj } from './TableRow'

// // interface dataObj {
// //   companyName : string;
// //   industry : string;
// //   percentage : string | number;
// //   link : string;
// // }

// interface Props {
//   rowDataList : dataObj[];


// }

// const CompaniesTable = ({rowDataList} : Props) => {


//   return (
//     <div className='companies-table'>
//       <div className= 'companies-table-header-container'>
//         <TableHeader 
//         customClassName='companies-table-header'
//         mainColName='Company Name'
//         subColName1='Percentage'
//         subColName2='Why Divest?'></TableHeader>
//       </div>
//       <div className='companies-table-row-container'>
//         {rowDataList.map((value, index) => {
//           return <TableRow customClassname='beehive' itemNum={2} data={value} ></TableRow>;
//           })}
//       </div>
//     </div>
//   )
// }

// export default CompaniesTable

// @/src/App.tsx
import "@fontsource/anek-telugu";
import { styled } from "@stitches/react";

import { Table, IColumnType } from "./TableParts/Table";

export interface IData {
  companyName: string;
  percentage: string;
  industry : string;
  link: string[];
}

const Span = styled("span", { // we might not need span
  background: "#596b7e",
  color: "white",
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 99999,
});

const columns: IColumnType<IData>[] = [
  {
    key: "companyName",
    title: "Company Name",
    width: "48vw", // of 80vw
  },
  {
    key: "percentage",
    title: "Percentage",
    width: "12vw",
  },
  {
    key: "industry",
    title: "Industry",
    width: "20vw",
  }
//   {
//     key: "link",
//     title: "Why Divest?",
//     width: 200,
//     render: (_, { link }) => (
//       <>
//         {link.map((tag, tagIndex) => (
//           <Span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
//             {tag}
//           </Span>
//         ))}
//       </>
//     ),
//   },
];

interface Props {
  rowData : IData[];
}

const CompaniesTable = ({rowData} : Props) => {
  return (
    <div className='companies-table'>
      <Table data={rowData} columns={columns}/>
    </div>
  );
}

export default CompaniesTable;