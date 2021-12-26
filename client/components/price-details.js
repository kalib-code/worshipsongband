import React from 'react'

import PropTypes from 'prop-types'

const PriceDetails = (props) => {
  return (
    <>
      <div className="price-details">
        <span className="pricing-details">
          <span>Multi Track x 1 $9.99</span>
          <br></br>
          <span>Chord Chart 1 x $2.5</span>
          <br></br>
          <span>MP3 File x 1 $5.00</span>
          <span className="text3"></span>
        </span>
        <span className="total-price">{props.TotalPrice}</span>
        <button className="button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .price-details {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .pricing-details {
            font-size: 1.5em;
            font-style: normal;
            text-align: right;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .text3 {
            text-align: right;
          }
          .total-price {
            font-size: 1.5em;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .button {
            width: 100%;
            text-align: center;
            background-color: var(--dl-color-primary-maroon);
          }
          @media (max-width: 767px) {
            .price-details {
              width: auto;
              align-items: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

PriceDetails.defaultProps = {
  TotalPrice: 'Total $17.49',
  button: 'Purchase',
}

PriceDetails.propTypes = {
  TotalPrice: PropTypes.string,
  button: PropTypes.string,
}

export default PriceDetails
