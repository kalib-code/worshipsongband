import React from 'react'

import PropTypes from 'prop-types'

const DownloadButton = (props) => {
  return (
    <>
      <div className="container">
        <button className="button">{props.button1}</button>
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
