import React, { useState } from 'react'
import Banner from '../components/Banner'
import BannerTextWindow from '../components/BannerTextWindow'
import BannerText from '../components/BannerText'

import './HomePage.css'
import ParagraphSection from '../components/ParagraphSection'
import CompaniesTable, {IData} from '../components/CompaniesTable'
import HomepageFooter from '../components/FooterParts/HomepageFooter'

import emailImage from '../assets/email-template.png'

import PopUpBox from '../components/PopUpBox'
import EmailContent from '../components/EmailContent'

const HomePage = () => {

  // console.log("Working...")

  const rows : IData[] = [{ // in reality this will be an API fetch
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER ioshafaijskfghndsakfndsajkfadssjfdkanrjsgnrahjskbfnjskagnjekrasngjfksdfdnasjkfdsanfksad",
      percentage : "33%",
      link : ["https://www.google.com"]  
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    },
    
    {
      companyName : "Some Company",
      industry : "WEAPONS MANUFACTURER",
      percentage : "33%",
      link : ["https://www.google.com"]
    }]

    const [emailTemplateShown, setEmailTemplateShown] = useState(false);
    const showEmailTemplate = () => {
      setEmailTemplateShown(!emailTemplateShown);
    }
    const hideEmailTemplate = () => {
      setEmailTemplateShown(false);
    }
  
  
    return (
      <div className = "homepage-full">
        <Banner>
          <BannerTextWindow>
            <BannerText />
          </BannerTextWindow>
        </Banner>
  
        <div className='homepage-text-sections'>
          <ParagraphSection className='why-divest' title="Why Divest?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParagraphSection>
  
          <div className='email-template-section'>
            <img src={emailImage} className='email-template-image' 
            onClick={showEmailTemplate}></img>
            <ParagraphSection className='email-template-paragraph' title="Send a Disclosure Request Yourself">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </ParagraphSection>
          </div>
          
          <ParagraphSection className='info-table' title="Info Table">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ParagraphSection>
        </div>
  
        <div className="companies-table-placement-container">
          <CompaniesTable rowData={rows}></CompaniesTable>
        </div>
  
  
        {emailTemplateShown && <PopUpBox isOpen={emailTemplateShown} setOpen={setEmailTemplateShown}>
          <EmailContent />
        </PopUpBox>}
      
  
  
        <HomepageFooter></HomepageFooter>
  
      </div>
  
    )
}

export default HomePage
