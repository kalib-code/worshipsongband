import React from 'react'
import Head from 'next/head'

import Header from '../../components/header'
import OptionButton from '../../components/option-button'
import Footer from '../../components/footer'

const Store = (data) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Store - Worship Song Band</title>
          <meta property="og:title" content="Store - Worship Song Band" />
        </Head>
        <Header rootClassName="rootClassName"></Header>
        <div className="store-container">
          <div className="store-option">
            <OptionButton text="Songs"></OptionButton>
            <OptionButton text="Artist"></OptionButton>
            <OptionButton text="Album"></OptionButton>
            <OptionButton text="Themes"></OptionButton>
            <OptionButton text="Genres"></OptionButton>
          </div>
        </div>
        <Footer rootClassName="rootClassName"></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .store-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .store-option {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:1337/api/songs', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + "62a4a9e258a89966e254aec351598ee79e0064ed87dab70f22b7449edf3f350008fd2996dd0810fde7b278215b36592bcd2962bc56b1b6dc8c13053d7f82dc500a73999fd4cb7bdbe64b0b7d2fcc14d1717c33168463f730d1d3a5902b2569b33014c85ea2a3864d875502229c552825de2b5f83341da73bd3c772ff657dc1b3"
      }
  })

  const data = await res.json()

  console.log(data, "data")

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Store
