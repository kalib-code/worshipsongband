import React from 'react'
import Markdown from 'markdown-to-jsx';



import Header from '../../components/header'
import SongInfos from '../../components/song-infos'
import PriceDetails from '../../components//price-details'
import Footer from '../../components/footer'
import AdditionalInfo from '../../components/song-additional-info';

const StoreSingleView = ({song}) => {
  console.log()
  return (
    <>
 
      <div className="container">
        <Header rootClassName="rootClassName1"></Header>
        <div className="container1">
          <div className="details-section">
            <SongInfos
            title_text={song.data.attributes.title}
            artist_text={song.data.attributes.artist.data.attributes.firstName}
          //TODO: key on db
            key_text={"G"}
            time_signature_text={song.data.attributes.timeSignature}
            length_text={song.data.attributes.duration}
            image_alt={song.data.attributes.album.data.attributes.cover.data.attributes.formats.medium.name}
             //TODO: add type on db
            type_text={"Original"}
            image_src={`http://localhost:1337${song.data.attributes.album.data.attributes.cover.data.attributes.formats.medium.url}`}
             //TODO: add bpm on db
            bpm_text={"4/4"}
            />
          
            <PriceDetails
            Resources={song.data.attributes.Resources}
            songData={song.data}
            />
          </div>
          <div className="container2">
            <div className="container4">
            <AdditionalInfo/>
            </div>
             <Markdown>{song.data.attributes.lyric}</Markdown>
            <div className="container3">
              <AdditionalInfo
               themeText={song.data.attributes.themes.map(e => e.theme)}
               genresText={song.data.attributes.genres.map(e => e.genre)}
               wirterText= {song.data.attributes.writer}
               yearText={song.data.attributes.year}
              //  mtIdText={}
              //  copyRightsText={''}
               />
            </div>
          </div>
        </div>
        <Footer rootClassName="rootClassName1"></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .details-section {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #f7f5e9;
          }
          .container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #f7f5e9;
          }
          .text66 {
            font-weight: 700;
          }
          .text68 {
            font-weight: 700;
          }
          .text70 {
            font-weight: 700;
          }
          .text72 {
            font-weight: 700;
          }
          .text74 {
            font-weight: 700;
          }
          @media (max-width: 2000px) {

            .container4 {
              display: none;
              }
          }
          @media (max-width: 767px) {
            .container1 {
              align-items: flex-end;
              flex-direction: column;
            }
            .details-section {
              align-items: flex-end;
              flex-direction: column;
            }
           
          }
          @media (max-width: 479px) {
            .container1 {
              align-items: flex-end;
              flex-direction: column;
            }
            .details-section {
              align-items: flex-end;
              flex-direction: column;
            }
            .container2 {
              flex-direction: column;
            }
            .container4 {
              display: block;
              }
              .container3{
                display: none;
              }
          }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.URL}/api/songs/${context.params.id}?populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*&populate[themes][populate][4]=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const song = await res.json();
  if (!song) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { song },
  };
}

export default StoreSingleView
