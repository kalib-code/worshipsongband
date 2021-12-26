import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card ${props.rootClassName} `}>
        <h2 className="text">{props.title}</h2>
        <span className="text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .text {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text1 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  title: 'Lorem ipsum',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
