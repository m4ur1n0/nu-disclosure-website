import React, { ReactNode, useEffect } from 'react'
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface Props {
    isOpen : boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children : ReactNode;
}

const PopUpBox = ({isOpen, setOpen, children} : Props) => {

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

    const closePopUp = () => {
        setOpen(false);
    };

  return (
    <div className='pop-up-box'>
        <div className='pop-up-box-close-button' onClick={closePopUp}>
          <FontAwesomeIcon icon={faX} className='pop-up-box-close-x-button'/>
        </div>
        <div className='pop-up-box-content'>
            {children}
        </div>
    </div>
  )
}

export default PopUpBox
