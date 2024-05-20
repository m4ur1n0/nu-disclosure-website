import React, { ReactNode } from 'react'

interface Props {
    customClassName : string;
    mainColName : string;
    subColName1 : string;
    subColName2 : string;
}

const TableHeader = ({customClassName, mainColName, subColName1, subColName2} : Props) => {

    const primColClass = `table-header-primary-column ${mainColName}`;
    const secColClass = `table-header-secondary-column ${subColName1}`;
    const tertColClass = `table-header-tertiary-column ${subColName2}`;

  return (
    <div className={`table-header ${customClassName}`}>
        <h3 className={primColClass}>{mainColName}</h3>
        <p className={secColClass}>{subColName1}</p>
        <p className={tertColClass}>{subColName2}</p>
    </div>
  )
}

export default TableHeader
