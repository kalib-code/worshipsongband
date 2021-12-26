import React from 'react'

import PropTypes from 'prop-types'

const OptionButton = (props) => {
  return (
    <>
      <div className="capsule">
        <span className="text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .capsule {
            flex: 0 0 auto;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            background-color: #fbfafa;
          }
          .text {
            color: #080808;
            font-style: normal;
            font-weight: 600;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

OptionButton.defaultProps = {
  text: 'All',
}

OptionButton.propTypes = {
  text: PropTypes.string,
}

export default OptionButton
