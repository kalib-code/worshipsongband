import React, { useState , useEffect} from "react";
import Select from "react-select";
import { useQuery } from "react-query";

import Header from "../../components/header";
import Footer from "../../components/footer";
import SongListView from "../../components/song-list-view";

const API_URL = process.env.URL
const API_KEY = process.env.TOKEN;

const getSongs = async (key) => {
  const songKey = key.queryKey[1].song;
  const artistKey = key.queryKey[1].artist;
  const albumKey = key.queryKey[1].album;
  const pageNumber = key.queryKey[1].page;

  if (songKey) {
    const response = await fetch(
      `${API_URL}/api/songs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*&filters[title][$contains]=${songKey}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  if (artistKey) {
    const response = await fetch(
      `${API_URL}/api/songs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*&filters[$or][2][artist][firstName][$contains]=${artistKey}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  if (albumKey) {
    const response = await fetch(
      `${API_URL}/api/songs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*&filters[$or][0][album][title][$contains]=${albumKey}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  const res = await fetch(
    `${API_URL}/api/songs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*`
    ,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return res.json();
};

const Store = ({ songs, artists, albums }) => {
  const [page, setPage] = useState(1);
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const { data, status } = useQuery(
    ["songs", { song: song, artist: artist, album: album ,page:page }],
    getSongs,
    { initialData: songs }
  );


  useEffect(() => {

    if(page=== 1){
      setPrevDisabled(true);
    }else{
      setPrevDisabled(false)
    }



    if(data.meta.pagination.pageCount === page){
      setNextDisabled(true);
    }else(
      setNextDisabled(false)
    )

  },[data])

  

  const list =
    status === "success" &&
    data.data.map((song, index) => {
      return (
  
        <SongListView
          key={song.id}
          id={song.id}
          album_mage_src={`${API_URL}${song.attributes.album.data.attributes.cover.data.attributes.formats.large.url}`}
          title_text={song.attributes.title}
          artist_text={song.attributes.artist.data.attributes.firstName}
          resource_text={song.attributes.Resources.map( e => e.type )}
        />

      );
    });

  const songOptions = songs.data.map((song) => {
    return {
      value: song.attributes.title,
      label: song.attributes.title,
    };
  });

  const artistOptions = artists.map((song) => {
    return {
      value: song.firstName,
      label: song.firstName,
    };
  });

  const albumOptions = albums.data.map((song) => {
    return {
      value: song.attributes.title,
      label: song.attributes.title,
    };
  });


  return (
    <>
      <div className="container">
        <Header rootClassName="rootClassName"></Header>
        <div className="page-title-container">
          <h1>WorshipSong Store</h1>
        </div>
        <div className="store-container">
          <div className="filter-song-container">
          <span className="select-option-label-wrapper">Filter Songs</span>
            <div className="select-option-wrapper">
              <Select
                options={songOptions}
                instanceId="songs"
                placeholder="Songs Filter"
                onChange={(e) => setSong(e?.value)}
                isClearable
              />
            </div>
            <div className="select-option-wrapper">
              <Select
                options={artistOptions}
                instanceId="artist"
                placeholder="Artist Filter"
                onChange={(e) => setArtist(e?.value)}
                isClearable
              />
            </div>
            <div className="select-option-wrapper">
              <Select
                options={albumOptions}
                instanceId="album"
                placeholder="Albums Filter"
                onChange={(e) => setAlbum(e?.value)}
                isClearable
              />
            </div>
          </div>
          <div className="songlist-container">
            {status == "error" && <div>Error</div>}
            {status == "loading" && <div>Loading...</div>}
            {status == "success" && list}
            <div className="pagination-button">
              <button className="prev-button button" disabled={prevDisabled} onClick={()=>setPage(page - 1)}>Previous</button>
              <button className="next-button button" disabled={nextDisabled} onClick={()=>setPage(page + 1)}>Next</button>
            </div>
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
          .page-title-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .store-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: grid;
            grid-gap: 10px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            grid-auto-rows: minmax(100px, auto);
            padding-bottom: var(--dl-space-space-threeunits);
            grid-template-columns: 1fr 3fr;
          }
          .filter-song-container {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            padding: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .songlist-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .select-option-wrapper {
            padding: var(--dl-space-space-unit)
          }
          .select-option-label-wrapper {
            padding: var(--dl-space-space-halfunit);
            font-size: 2em;
            font-weight: bold;
          }
          .pagination-button {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .prev-button {
            transition: 0.3s;
            border:none;
            background-color: var(--dl-color-primary-maroon);
          }
          .prev-button:disabled {
            background-color: #bdbdbd;
          }
          .next-button {
            transition: 0.3s;
            border:none;
            background-color: var(--dl-color-primary-maroon);
          }
          .next-button:disabled {
            background-color: #bdbdbd;
          }
          @media (max-width: 479px) {
            .store-container {
              grid-template-columns: 1fr;
            }
          }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.URL}/api/songs?pagination[page]=1&pagination[pageSize]=10&populate[album][populate][cover]=*&populate[Resources][populate][1]=*&populate[artist][populate][2]=*&populate[genres][populate][3]=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const songs = await res.json();

  const resArtists = await fetch(
    `${process.env.URL}/api/users?populate[role]=*&filters[role][type][$eq]=artist`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const artists = await resArtists.json();

  const resAlbums = await fetch(`${process.env.URL}/api/albums`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });

  const albums = await resAlbums.json();

  if (!songs) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { songs, artists, albums },
  };
}

export default Store;
