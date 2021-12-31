import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { parseCookies , destroyCookie } from 'nookies'
import PropTypes from 'prop-types'

import NavigationLinks from '../navigation-links'
import DownloadButton from '../download-button'

const Header = (props) => {
  const cookies = parseCookies().auth

  const [isLogin, setIsLogin] = useState(false)
  

useEffect(() => {

  if(cookies){
    setIsLogin(true)
  }

},[isLogin])


function logoutHandler () {
 console.log('log')
  destroyCookie(null,'auth',{
    path: '/',
  })

  setIsLogin(false)

}


  return (
    <>
      <header className={`header ${props.rootClassName} `}>
        <Link href="/">
          <a className="link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="image"
            />
          </a>
        </Link>
        <div className="nav">
          <NavigationLinks rootClassName="rootClassName1"></NavigationLinks>
        </div>
       
        <div className="btn-group">
         { !isLogin ? <Link href='/login'>
          <a className="button">{props.button}</a>
          </Link> : 
          <Link href='/'>
          <a className="button" onClick={()=>{logoutHandler()}}>Logout</a>
          </Link>}

          {isLogin && <a className="button" href="/user">Account</a>}
          
          <DownloadButton/>
        </div>
        <div className="menu-burger teleport-menu-burger">
          <svg viewBox="0 0 1024 1024" className="icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div className="teleport-menu-mobile menu-mobile">
          <div className="nav1">
            <div className="container">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="image1"
              />
              <div className="teleport-menu-close">
                <svg viewBox="0 0 1024 1024" className="icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #ffffff;
          }
          .link {
            display: contents;
          }
          .image {
            height: 2rem;
            text-decoration: none;
          }
          .nav {
            display: flex;
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .button {
            color: #0c0c0c;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            background-color: transparent;
          }
          .button1 {
            background-color: var(--dl-color-danger-300);
          }
          .menu-burger {
            display: none;
          }
          .icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .image1 {
            height: 2rem;
          }
          .icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .header {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav {
              display: none;
            }
            .btn-group {
              display: none;
            }
            .menu-burger {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header {
              padding: var(--dl-space-space-unit);
            }
            .menu-mobile {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  button: 'Login',
  image_src: '/playground_assets/ws_ogo-200h.png',
  image_alt: 'logo',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header
