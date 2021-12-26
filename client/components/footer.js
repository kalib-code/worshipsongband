import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer ${props.rootClassName} `}>
        <div className="container">
          <img alt={props.image_alt} src={props.image_src} className="image" />
          <span className="text">{props.text}</span>
        </div>
        <div className="container1">
          <span className="text1">{props.text1}</span>
          <div className="icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="icon4">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </div>
        </div>
        <div className="container2">
          <span className="text2">{props.title_text}</span>
          <span className="text3">{props.news_letter}</span>
          <form className="form">
            <input
              type="text"
              placeholder={props.Input_placeholder}
              className="input"
            />
            <button className="button">{props.button}</button>
          </form>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #000000;
          }
          .container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image {
            width: 200px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text {
            color: #ffffff;
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text1 {
            color: #ffffff;
            font-size: 1.3em;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon {
            fill: #f7f5f5;
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-twounits);
          }
          .icon2 {
            fill: #f5efef;
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-twounits);
          }
          .icon4 {
            fill: #f9f8f8;
            width: 30px;
            height: 30px;
          }
          .container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text2 {
            color: #ffffff;
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
          .text3 {
            color: #ffffff;
            font-size: 1em;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .form {
            height: 38px;
          }
          .input {
            border-radius: 20px;
          }
          .button {
            border-width: 0px;
            border-radius: 20px;
            background-color: var(--dl-color-danger-300);
          }

          @media (max-width: 991px) {
            .footer {
              width: 990px;
              flex-direction: column;
            }
            .container {
              align-items: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .container2 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .container {
              align-items: center;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .form {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .text {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .container2 {
              display: none;
            }
            .text2 {
              font-size: 1em;
            }
            .form {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_alt: 'image',
  button: 'Subcribe',
  text1: 'Follow us!',
  title_text: 'NEWSLETTER',
  Input_placeholder: 'placeholder',
  image_src: '/playground_assets/ws_ogo-200h.png',
  rootClassName: '',
  text: '© 2021 WorshipSong Band, All Rights Reserved.',
  news_letter: 'Join our mailing list to receive our latest news!',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  title_text: PropTypes.string,
  Input_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  news_letter: PropTypes.string,
}

export default Footer
