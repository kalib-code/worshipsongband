import React from 'react'

import PropTypes from 'prop-types'

const SongInfos = (props) => {
  return (
    <>
      <div className="song-infos">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container">
          <span className="text">{props.text}</span>
          <span className="text1">{props.text1}</span>
          <span className="text2">{props.text2}</span>
          <span className="text3">{props.text3}</span>
          <span className="text4">{props.text4}</span>
          <span className="text5">{props.text5}</span>
          <span>{props.text6}</span>
        </div>
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .song-infos {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: 20px;
          }
          .container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            font-size: 1.5em;
            font-style: normal;
            font-weight: 600;
          }
          .text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text2 {
            font-style: normal;
            font-weight: 700;
          }
          .text3 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text4 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text5 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon {
            fill: var(--dl-color-primary-maroon);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 767px) {
            .song-infos {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .song-infos {
              width: 100%;
              padding: 0px;
            }
            .text {
              font-size: 1em;
            }
            .text1 {
              font-size: 1em;
            }
            .icon {
              align-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

SongInfos.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  text: 'By Your Stripes',
  text1: 'Hannah Ford - FAITH',
  text2: 'Orignal Master',
  text3: 'Key:Db',
  text4: 'BPM:148',
  text5: 'Time Sig:4/4',
  text6: 'Length:4:11',
}

SongInfos.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
}

export default SongInfos
