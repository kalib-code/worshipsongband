import React, {useState, useEffect} from 'react'

import PropTypes from 'prop-types'

import { isAndroid,isIOS,isWindows, isMacOs } from 'react-device-detect';


const DownloadButton = (props) => {

  const [downloadLink, setDownloadLink] = useState(null)

  useEffect(() => {
    if(isAndroid){

      setDownloadLink ("https://wsb-installers.s3.amazonaws.com/Worshipsong_Band-release.apk")
     }
    
     if(isIOS){
       setDownloadLink("https://apps.apple.com/us/app/worshipsong-band/id569931127")
     }
    
     if(isWindows){
       setDownloadLink("https://wsb-installers.s3.amazonaws.com/Installer.msi")
     }
    
     if(isMacOs){
       setDownloadLink("https://wsb-installers.s3.amazonaws.com/WorshipSong+Band.zip")
    
     }

  },[])

  


  return (
    <>
      <div className="container">
        <a className="button" href={downloadLink} download >{props.button1}</a>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-danger-300);
            border:none;
          }

        `}
      </style>
    </>
  )
}

DownloadButton.defaultProps = {
  button1: 'Download',
}

DownloadButton.propTypes = {
  button1: PropTypes.string,
}

export default DownloadButton
