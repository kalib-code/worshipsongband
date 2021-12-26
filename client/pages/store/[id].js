import React from 'react'

import Header from '../../components/header'
import SongInfos from '../../components/song-infos'
import PriceDetails from '../../components//price-details'
import Footer from '../../components/footer'

const StoreSingleView = () => {
  return (
    <>
      <div className="container">
        <Header rootClassName="rootClassName1"></Header>
        <div className="container1">
          <div className="details-section">
            <SongInfos></SongInfos>
            <PriceDetails></PriceDetails>
          </div>
          <div className="container2">
            <span>
              <span>Verse 1</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Joy to the world the Lord is come</span>
              <br></br>
              <span>Let earth receive her King</span>
              <br></br>
              <span>Let every heart prepare Him room</span>
              <br></br>
              <span>And Heaven and nature sing</span>
              <br></br>
              <span>And Heaven and nature sing</span>
              <br></br>
              <span>And Heaven and Heaven</span>
              <br></br>
              <span>And nature sing</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span>Joy to the world</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Verse 2</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Joy to the world the Savior reigns</span>
              <br></br>
              <span>Let men their songs employ</span>
              <br></br>
              <span>While fields and floods</span>
              <br></br>
              <span>Rocks hills and plains</span>
              <br></br>
              <span>Repeat the sounding joy</span>
              <br></br>
              <span>Repeat the sounding joy</span>
              <br></br>
              <span>Repeat repeat</span>
              <br></br>
              <span>The sounding joy</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span>Joy to the world</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Verse 3</span>
              <br></br>
              <span></span>
              <br></br>
              <span>He rules the world with truth and grace</span>
              <br></br>
              <span>And makes the nations prove</span>
              <br></br>
              <span>The glories of His righteousness</span>
              <br></br>
              <span>And wonders of His love</span>
              <br></br>
              <span>And wonders of His love</span>
              <br></br>
              <span>And wonders</span>
              <br></br>
              <span>Wonders of His love</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span>Joy to the world</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Chorus</span>
              <br></br>
              <span></span>
              <br></br>
              <span>We will sing sing sing</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Bridge</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Joyful joyful we adore Thee</span>
              <br></br>
              <span>God of glory Lord of love</span>
              <br></br>
              <span>Hearts unfold like flowers before Thee</span>
              <br></br>
              <span>Opening to the sun above</span>
            </span>
            <div className="container3">
              <span>
                <span className="text66">Themes:</span>
                <br></br>
                <span>BLESSING, CHRISTMAS, JOY</span>
                <br></br>
                <span className="text68">Genres:</span>
                <br></br>
                <span>CHRISTMAS, MALE LEAD</span>
                <br></br>
                <span className="text70">Writers:</span>
                <br></br>
                <span>Hanna Ford</span>
                <br></br>
                <span className="text72">Year:</span>
                <br></br>
                <span>2019</span>
                <br></br>
                <span className="text74">mtID:</span>
                <br></br>
                <span>14610</span>
                <br></br>
                <span></span>
                <br></br>
                <span>℗ 2019 Hanna Ford</span>
              </span>
            </div>
          </div>
        </div>
        <Footer rootClassName="rootClassName1"></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .details-section {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #f7f5e9;
          }
          .text66 {
            font-weight: 700;
          }
          .text68 {
            font-weight: 700;
          }
          .text70 {
            font-weight: 700;
          }
          .text72 {
            font-weight: 700;
          }
          .text74 {
            font-weight: 700;
          }
          @media (max-width: 767px) {
            .container1 {
              align-items: flex-end;
              flex-direction: column;
            }
            .details-section {
              align-items: flex-end;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .container1 {
              align-items: flex-end;
              flex-direction: column;
            }
            .details-section {
              align-items: flex-end;
              flex-direction: column;
            }
            .container2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default StoreSingleView
