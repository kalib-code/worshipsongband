import React, {useState, useEffect} from 'react'
import { isAndroid,isIOS,isWindows, isMacOs } from 'react-device-detect';
import PropTypes from 'prop-types'
import DownloadButton from './download-button'

const Download = (props) => {

  const [downloadLink, setDownloadLink] = useState(null)

  useEffect(() => {
    if(isAndroid){

      setDownloadLink ("Android Device")
     }
    
     if(isIOS){
       setDownloadLink("IOS Device")
     }
    
     if(isWindows){
       setDownloadLink("Windows Device")
     }
    
     if(isMacOs){
       setDownloadLink("MacOs Device")
    
     }

  },[])
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <span className="text">{downloadLink}</span>
        <DownloadButton/>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .image {
            width: 50%;
            margin-top: 0px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text {
            font-size: 2em;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .button {
            color: #f7f2f2;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-danger-300);
          }
        `}
      </style>
    </>
  )
}

Download.defaultProps = {

  image_src: '/playground_assets/macbook-400w.png',
  text: 'Mac OS',
  image_alt: 'image',
}

Download.propTypes = {

  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Download
