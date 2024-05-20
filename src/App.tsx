import React from 'react'
import Banner from './components/Banner'
import BannerTextWindow from './components/BannerTextWindow'
import BannerText from './components/BannerText'

import './App.css'
import ParagraphSection from './components/ParagraphSection'
import CompaniesTable, {IData} from './components/CompaniesTable'
import HomepageFooter from './components/FooterParts/HomepageFooter'


const App = () => {
  const rows : IData[] = [{ // in reality this will be an API fetch
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER ioshafaijskfghndsakfndsajkfadssjfdkanrjsgnrahjskbfnjskagnjekrasngjfksdfdnasjkfdsanfksad",
    percentage : "33%",
    link : ["https://www.google.com"]  
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  },
  
  {
    companyName : "BEEHIVE",
    industry : "WEAPONS MANUFACTURER",
    percentage : "33%",
    link : ["https://www.google.com"]
  }]


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

        <ParagraphSection className='info-table' title="Info Table">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ParagraphSection>
      </div>

      <CompaniesTable rowData={rows}></CompaniesTable>
      <HomepageFooter></HomepageFooter>
    </div>
  )
}

export default App
