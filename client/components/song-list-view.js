import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import ResourceText from './resource-text'

const SongListView = (props) => {

  return (
    <>
      <Link href={`/store/${props.id}`}>
      <div className="song-list-view" >
        <div className="image-container">
          <img
            alt={props.album_mage_alt}
            src={props.album_mage_src}
            className="album-mage"
          />
        </div>
        <div className="song-container">
          <div className="title-container">
            <span className="title-text">{props.title_text}</span>
          </div>
          <div className="artist-container">
            <span className="artist-text">{props.artist_text}</span>
          </div>
          <div className="resource-container">
           
              {props.resource_text.map((text) =>
               <ResourceText resource_text={ text }/>)}
        
          </div>
        </div>
      </div>
      </Link>
      <style jsx>
        {`
          .song-list-view {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            align-items: center;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(89, 89, 89, 0.25);
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .image-container {
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
          }
          .album-mage {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: 20px;
          }
          .song-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
          }
          .title-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            flex-wrap: wrap;
            word-wrap: break-word;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .title-text {
            font-size: 1em;
            font-style: normal;
            font-weight: 700;
          }
          .artist-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .artist-text {
            font-size: 1em;
            font-style: normal;
            font-weight: 600;
          }
          .resource-container {
            flex-direction: row;
            width:40%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
        
          @media (max-width: 991px) {
            .song-list-view {
              width: 100%;
            }
            .album-mage {
              align-self: center;
            }
            .song-container {
              align-items: stretch;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .song-list-view {
              border-radius: 20px;
            }
            .song-container {
              flex-direction: column;
            }
            .title-container {
              width: 100%;
            }
            .artist-container {
              width: 100%;
            }
            .resource-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .song-list-view {
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
     </style>
   
    </>
  )
}

SongListView.defaultProps = {
  album_mage_src:
    'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNjQwNTI2MzUy&ixlib=rb-1.2.1&w=200',
  album_mage_alt: 'image',
  title_text: 'Song Title Here',
  artist_text: 'Name of Artist here',
  resource_text: ['Multi-Tracks', 'Single-Track', 'Live', 'Remix','Chord-Chart', 'Lyric'],
}

SongListView.propTypes = {
  album_mage_src: PropTypes.string,
  album_mage_alt: PropTypes.string,
  title_text: PropTypes.string,
  artist_text: PropTypes.string,
  resource_text: PropTypes.array,
  id: PropTypes.number,
}

export default SongListView
