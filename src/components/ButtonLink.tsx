
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
    children : string | ReactNode;
    linkto : string;
    specificClass? : string;
}

const ButtonLink = ({ linkto, children, specificClass } : Props) => {

    const navigate = useNavigate();

    const realClass = `${specificClass} button-link`;
    const handleClick = () => {
      // window.open(linkto, "_blank");

      // TEMPORARY SOLUTION : MAKING ALL BUTTONLINKS LINK TO commsug page
      navigate('/community-suggestions');

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
