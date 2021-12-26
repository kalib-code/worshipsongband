import React from 'react'

import PropTypes from 'prop-types'

const Download = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <span className="text">{props.text}</span>
        <button className="button">{props.button}</button>
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
  button: 'Download',
  image_src: 'c306f54a-01d0-49c1-9acb-69b1da3a3aab',
  text: 'Mac OS',
  image_alt: 'image',
}

Download.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Download
