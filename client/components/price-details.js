import React , {useState} from 'react'

import PropTypes from 'prop-types'

import { parseCookies } from 'nookies'
const payment = (songData) => {

const cookies = parseCookies().auth
if(!cookies) return


const productData = songData.attributes.Resources.map(product =>{
 return {
    price_data: {
      currency: "usd",
      product_data: {
        name: product.type
      },
      unit_amount: product.price * 100,
    },
    "quantity": 1
  }
})


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNjg0OTgyLCJleHAiOjE2NDMyNzY5ODJ9.rmSbxwdqbzXiNSzU2gRv20DifJIElp2VPuOdfmLuoDE");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "artist_id": songData.attributes.artist.data.attributes.id,
  "song_id": songData.id,
  "product_data": productData
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



fetch("http://localhost:1337/api/payment/stripe", requestOptions)
  .then(response => response.json())
  .then(result => {
    window.location.replace(result.redirect_url)
  })
  .catch(error => console.log('error', error));

}

const PriceDetails = (props) => {
  function totalPrice(total, num) {
    return total + num;
  }
  return (
    <>
      <div className="price-details">
        <span className="pricing-details">
          {props.Resources.map((item, index) => {
            return (
              <span key={index}>
                <span className="price-details-title">{`${item.type}    $`}</span>
                <span className="price-details-value">{item.price}</span>
              </span>
            )
          })}
        </span>
        <span className="total-price">{`$ ${props.Resources.map(e=> e.price).reduce(totalPrice)}`}</span>
        <button className="button" onClick={()=>{payment(props.songData)}}>{ props.purchaseText}</button>
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
            display: flex;
            flex-direction: column;
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
  Resources:[{'type':'Multi Track','price':9.99},{'type':'Chord Chart','price':2.5},{'type':'MP3 File','price':5.99}]
}

PriceDetails.propTypes = {
  button: PropTypes.string,
  Resources: PropTypes.array,
  songData: PropTypes.object,
  purchaseText: PropTypes.string
}

export default PriceDetails
