import React , {useState, useEffect} from 'react'
import useSound from 'use-sound';

import PropTypes from 'prop-types'

const SongInfos = (props) => {

const [playing, setPlaying] = useState(false);

const [play, { stop }] = useSound(props.sample_music_link);
 
 useEffect(() => {
  if (playing) {
    play();
  } else {
    stop();
  }
 } , [playing]);

  
  return (
    <>
      <div className="song-infos">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="album-image"
        />
        <div className="info-text-container">
          <span className="title-text">{props.title_text}</span>
          <span className="artist-text">{props.artist_text}</span>
          <span className="type-text">{props.type_text}</span>
          <span className="key-text">{`Key: ${props.key_text}`}</span>
          <span className="bpm-text">{`BPM: ${props.bpm_text}`}</span>
          <span className="time-signature-text">
            {`Time Signature: ${props.time_signature_text}`}
          </span>
          <span>{`Duration: ${props.length_text}`}</span>
        </div>
        { !playing && <svg viewBox="0 0 1024 1024" className="icon" onClick={()=>setPlaying( !playing ? true : false)}>
          <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
        </svg>}
        { playing &&  <svg viewBox="0 0 877.7142857142857 1024" className="icon2" onClick={()=>setPlaying( !playing ? true : false)}>
          <path d="M621.714 676.571v-329.143c0-10.286-8-18.286-18.286-18.286h-329.143c-10.286 0-18.286 8-18.286 18.286v329.143c0 10.286 8 18.286 18.286 18.286h329.143c10.286 0 18.286-8 18.286-18.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>}
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
          .album-image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: 20px;
          }
          .info-text-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .title-text {
            font-size: 1.5em;
            font-style: normal;
            font-weight: 600;
          }
          .artist-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .type-text {
            font-style: normal;
            font-weight: 700;
          }
          .key-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .bpm-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .time-signature-text {
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
          .icon2 {
            fill: var(--dl-color-primary-gold);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
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
              flex-wrap: wrap;
              
            }
            .title-text {
              font-size: 1em;
            }
            .artist-text {
              font-size: 1em;
            }
            .icon {
              align-self: flex-end;
            }
            .album-image {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
              margin-right: 0px;
            }
            .icon {
              align-self: flex-start;
            }
            .icon2 {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

SongInfos.defaultProps = {
  artist_text: 'Hannah Ford - FAITH',
  key_text: 'Key:Db',
  time_signature_text: 'Time Sig:4/4',
  title_text: 'By Your Stripes',
  length_text: 'Length:4:11',
  image_alt: 'image',
  type_text: 'Orignal Master',
  image_src:
    'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxhbGJ1bXxlbnwwfHx8fDE2NDA0MzM3NzA&ixlib=rb-1.2.1&w=200',
  bpm_text: 'BPM:148',
  sample_music_link:'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3'
}

SongInfos.propTypes = {
  artist_text: PropTypes.string,
  key_text: PropTypes.string,
  time_signature_text: PropTypes.string,
  title_text: PropTypes.string,
  length_text: PropTypes.string,
  image_alt: PropTypes.string,
  type_text: PropTypes.string,
  image_src: PropTypes.string,
  bpm_text: PropTypes.string,
  sample_music_link: PropTypes.string,
}

export default SongInfos
