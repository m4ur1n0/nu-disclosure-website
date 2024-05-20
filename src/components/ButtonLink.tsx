import React from 'react'
import { ReactNode } from 'react'

interface Props {
    children : string | ReactNode;
    linkto : string;
    specificClass? : string;
}

const ButtonLink = ({ linkto, children, specificClass } : Props) => {

    const realClass = `${specificClass} button-link`;
    const handleClick = () => {
      window.open(linkto, "_blank");

      // if we wanted it to open in THIS window, we could:
      // window.location.href = "https://www.google.com";
    }

  return (
    <div 
    className={realClass}
    onClick = {handleClick}>
      <h4 className={`button-link-text ${realClass}-text`}>{children}</h4>
    </div>
    
  )
}

export default ButtonLink;
