import React from 'react'

import PropTypes from 'prop-types'

import ResourceText from './resource-text'

const SongPurchaseView = (props) => {
  return (
    <>
      <div className="song-container" key={props.id}>
        <div className="title-container">
          <span className="title-text">{props.song_title}</span>
        </div>
        <div className="album-container">
          <span>{props.song_album_text}</span>
        </div>
        <div className="artist-container">
          <span className="artist-text">{props.artist_text}</span>
        </div>
        <div className="resource-container">
           
              {props.resource_text.map((text) =>
               <ResourceText resource_text={ text }/>)}
        
          </div>
      </div>
      <style jsx>
        {`
          .song-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
            border-color: rgba(89, 89, 89, 0.25);
          }
          .title-container {
            flex: 0 0 auto;
            width: 25%;
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
          .album-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            word-wrap: break-word;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
          }
          .artist-container {
            flex: 0 0 auto;
            width: 25%;
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
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .song-container {
              align-items: stretch;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .song-container {
              flex-direction: column;
            }
            .title-container {
              width: 100%;
            }
            .album-container {
              width: 100%;
            }
            .artist-container {
              width: 100%;
            }
            .resource-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

SongPurchaseView.defaultProps = {
  song_title: 'Song Title Here',
  artist_text: 'Name of Artist here',
  song_album_text: 'Song Album',
  resource_text: ['Multi-Tracks', 'Single-Track', 'Live', 'Remix','Chord-Chart', 'Lyric'],
}

SongPurchaseView.propTypes = {
  song_title: PropTypes.string,
  artist_text: PropTypes.string,
  song_album_text: PropTypes.string,
  resource_text: PropTypes.array,
  id: PropTypes.number,
}

export default SongPurchaseView
