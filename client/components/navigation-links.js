import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <span className="text">{props.documentation}</span>
        <Link href="/store">
          <a className="link">{props.store}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .link {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  store: 'Store',
  documentation: 'Documentation',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  store: PropTypes.string,
  documentation: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
