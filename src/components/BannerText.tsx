import ButtonLink from "./ButtonLink"
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BannerText = () => {
  const link = 'https://docs.google.com/forms/d/e/1FAIpQLScQDGj3PZI1ACakwtVTLW7JpYonlrjObB7xnDfFAMhbU-XqSg/viewform';

  return (
    <div className = "banner-text">
      <h1 className="webpage-title">
        Northwestern Investment<br/>Disclosure
      </h1>
      <p className="banner-subtext">
        Want to recommend a company for us to look into?<br/>Submit on our community suggestions form!
      </p>
      <ButtonLink linkto={link} specificClass='form-button' data-tooltip='Link to input form'>
        <FontAwesomeIcon className='fontawesome-icon-banner' icon={faFileInvoice} />
      </ButtonLink>
    </div>
  )
}

export default BannerText
