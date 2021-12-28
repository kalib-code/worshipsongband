import React from 'react'

import PropTypes from 'prop-types'

const AdditionalInfo = (props) => {
  return (
    <>
      <div className="container">
        <span className="genres-text"><span style={{fontWeight:'bold'}}>GENRES:{ ` ${props.genresText.map( e => e)} `}</span>  </span>
        <span className="theme-text"><span style={{fontWeight:'bold'}}>THEMES: { ` ${props.themeText.map( e => e)} `} </span></span>
        <span className="writer-text"><span style={{fontWeight:'bold'}}>WRITER: </span>{props.wirterText}</span>
        <span className="year-text"><span style={{fontWeight:'bold'}}>YEAR: </span>{props.yearText}</span>
        <span className="mtid-text"><span style={{fontWeight:'bold'}}>MTID: </span>{props.mtIdText}</span>
        <span className="copy-right-text">{props.copyRightsText}</span>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            width: 300px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            background-color: #f7f5e9;
          }
          .genres-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .theme-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .writer-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .year-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .mtid-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .copy-right-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

AdditionalInfo.defaultProps = {
  themeText: ['BLESSING, CHRISTMAS, JOY'],
  genresText: ['CHRISTMAS, MALE LEAD'],
  wirterText: 'Hanna Ford',
  yearText: '2019',
  mtIdText: '14610',
  copyRightsText: '℗ 2019 Hanna Ford',
}

AdditionalInfo.propTypes = {
  themeText: PropTypes.array,
  genresText: PropTypes.array,
  wirterText: PropTypes.string,
  yearText: PropTypes.string,
  mtIdText: PropTypes.string,
  copyRightsText: PropTypes.string,
}

export default AdditionalInfo
