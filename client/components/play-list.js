import React from 'react'

import PropTypes from 'prop-types'

const PlayList = (props) => {
  return (
    <>
      <div className="play-list">
        <img
          alt={props.Image_Background_Alt}
          src={props.Image_Background}
          loading="lazy"
          className="image"
        />
        <div className="container">
          <img
            alt={props.Artist - Avatar_alt}
            src={props.Artist - Avatar_src}
            className="artist-avatar"
          />
          <div className="div">
            <span className="text">{props.Title}</span>
            <span className="text1">{props.SubTitle}</span>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .play-list {
            flex: 0 0 auto;
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            align-self: center;
            object-fit: cover;
            border-radius: 20px;
          }
          .container {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgba(0, 0, 0, 0.29);
          }
          .artist-avatar {
            width: 50px;
            height: 50px;
            object-fit: cover;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 100px;
          }
          .div {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .text {
            color: #fffefe;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            color: #f5f0f0;
            font-style: normal;
            font-weight: 600;
          }
          .icon {
            fill: #BF5837;
            right: 0px;
            width: var(--dl-size-size-small);
            bottom: 0px;
            height: var(--dl-size-size-small);
            position: absolute;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

PlayList.defaultProps = {
  'Artist-Avatar_alt': 'image',
  Title: 'Title',
  Image_Background:
    'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=300',
  Image_Background_Alt: 'image',
  SubTitle: 'Sub-title',
  'Artist-Avatar_src':
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGF2YXRhcnxlbnwwfHx8fDE2NDA0MzM3MjI&ixlib=rb-1.2.1&w=200',
}

PlayList.propTypes = {
  'Artist-Avatar_alt': PropTypes.string,
  Title: PropTypes.string,
  Image_Background: PropTypes.string,
  Image_Background_Alt: PropTypes.string,
  SubTitle: PropTypes.string,
  'Artist-Avatar_src': PropTypes.string,
}

export default PlayList
