import React, { useState } from 'react'


export interface dataObj {
  companyName : string;
  industry : string;
  percentage : string | number;
  link : string[];
}

interface Props {
  customClassname : string;
  itemNum : number; // this could just be the ID in a database
  data : dataObj;
}

const TableRow = ({customClassname, itemNum, data} : Props) => {
  const className = `table-row ${customClassname}`;
  const { companyName, industry, percentage, link } = data;
  const [industryIsShown, setIndustryIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIndustryIsShown(true);
  };

  const handleMouseLeave = () => {
    setIndustryIsShown(false);
  };

  const handleClick = () => {
    // navitate to new page
    // or create pop - up
    // oh well
  }

  return (
    <>
      <div className={className}
      onMouseEnter= {handleMouseEnter}
      onMouseLeave= {handleMouseLeave}
      onClick={handleClick}>
        {/* <p className= {`table-row-idx-num ${companyName}-table-row-idx`}>{itemNum}</p>  */}
        <h4 className={`table-row-company-name ${companyName}-table-row-company-name`}>{companyName}</h4>
        <h5 className = {`table-row-percentage ${companyName}-table-row-percentage`}>{percentage}%</h5>
        <h5 className={`table-row-industry ${companyName}-table-row-industry`}>{industry}</h5>
      </div>
      <div className= {`table-row-dialogue-box-outer ${companyName}-dialogue-box-outer`}
      onMouseEnter={handleMouseEnter}>
        {industryIsShown && <div className= {`table-row-dialogue-box ${companyName}-dialogue-box`}>{industry}</div>}
      </div>
    </>
  )
}

export default TableRow
