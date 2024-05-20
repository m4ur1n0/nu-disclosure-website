import React, { Children, ReactNode } from 'react'


interface Props {
    children : ReactNode;
}

const Banner = ({ children } : Props) => {
  return (
    <div className = "banner">
      {children}
    </div>
  )
}

export default Banner