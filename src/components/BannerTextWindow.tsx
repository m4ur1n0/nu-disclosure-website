import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode;
}

const BannerTextWindow = ({ children } : Props) => {
  return (
    <div className = "banner-text-window">
      {children}
    </div>
  )
}

export default BannerTextWindow
