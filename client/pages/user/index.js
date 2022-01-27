import React, { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import Select from "react-select";
import { useQuery } from "react-query";

import SongPurchaseView from "../../components/song-purchase";
import Footer from "../../components/footer";
import Header from "../../components/header";

const getPurchaseSong = async (key) => {
  const cookies = parseCookies();
  const token = cookies.auth;

  const songKey = key.queryKey[1].song;
  const pageKey = key.queryKey[1].page;
  const getUser = await fetch(`${process.env.URL}/api/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userInfo = await getUser.json();

  if (songKey) {
    const response = await fetch(
      `${process.env.URL}/api/orders?pagination[pageSize]=10&pagination[page]=${pageKey}&pagination[withCount]=true&populate[song][populate]=*&filters[users][id]=${userInfo.id}&filters[song][title][$eq]=${songKey}&filters[payment][payment_status]=Succeeded`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    return await response.json();
  }

  const res = await fetch(
    `${process.env.URL}/api/orders?pagination[pageSize]=10&pagination[page]=${pageKey}&pagination[withCount]=true&populate[song][populate]=*&filters[users][id]=${userInfo.id}&filters[payment][payment_status]=Succeeded`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  return res.json();
};

function user({ songs }) {
  const [song, setSong] = useState("");
  const [page, setPage] = useState(1);

  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);



  const { data, error } = useQuery(
    ["userPurchase", { song: song , page: page}],
    getPurchaseSong,
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


  const list = data.data.map((song, index) => {

    return (
      <SongPurchaseView
        song_title={song?.attributes?.song?.data?.attributes.title}
        artist_text={
          song?.attributes?.song?.data?.attributes.artist.data.attributes.firstName
        }
        song_album_text={
          song?.attributes?.song?.data?.attributes.album.data.attributes.title
        }
        resource_text={song?.attributes?.song?.data?.attributes.Resources.map(
          (e) => e.type
        )}
      />
    );
  });

  const songOptions = songs.data.map((song) => {
    return {
      value: song?.attributes?.song?.data?.attributes.title,
      label: song?.attributes?.song?.data?.attributes.title,
    };
  });

  return (
    <>
      <div className="container">
        <Header rootClassName="rootClassName3"></Header>
        <div className="page-title">
          <h1>Purchase Songs</h1>
        </div>
        <div className="purchase-song-container">
          <div className="filter-song-container">
            <span className="select-option-label-wrapper">Search Songs</span>
            <div className="select-option-wrapper">
              <Select
                options={songOptions}
                instanceId="songs"
                placeholder="Songs Filter"
                onChange={(e) => setSong(e?.value)}
                isClearable
              />
            </div>
          </div>
          <div className="purchase-songs">{list}</div>
          <div className="pagination-button">
              <button className="prev-button button" disabled={prevDisabled} onClick={()=>setPage(page - 1)}>Previous</button>
              <button className="next-button button" disabled={nextDisabled} onClick={()=>setPage(page + 1)}>Next</button>
            </div>
        </div>
        <Footer rootClassName="rootClassName3"></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .filter-song-container {
            width: 50%;
          }
          .page-title {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .purchase-song-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .purchase-songs {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            align-items: center;
            flex-direction: column;
            grid-column: 2;
            padding-top: var(--dl-space-space-halfunit);
           
            border-width: 1px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
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
            border-width: 0px;
            background-color: var(--dl-color-primary-maroon);
          }
          .prev-button:disabled {
            background-color: #bdbdbd;
          }
          .next-button {
            transition: 0.3s;
          }
          .next-button:disabled {
            background-color: #bdbdbd;
          }

          @media (max-width: 991px) {
            .purchase-songs {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .purchase-songs {
              border-radius: 20px;
            }
          }
          @media (max-width: 479px) {
            .purchase-songs {
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const cookies = parseCookies(context).auth

  const getUser = await fetch(`${process.env.URL}/api/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookies}`,
    },
  });

  const userInfo = await getUser.json();

if(context.query.success === "true"){
  const order = await fetch(
    `${process.env.URL}/api/orders/${context.query.orderID}?populate[song][populate]=*&populate[payment][populate]=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const OrderInfo = await order.json();


var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${cookies}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "data": {
    "payment_status": "Succeeded"
  }
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
};

fetch(`${process.env.URL}/api/payments/${OrderInfo.data.attributes.payment.data.id}`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
 
  //TODO: create a policy to only allow users to see their own orders via the API id
  const res = await fetch(
    `${process.env.URL}/api/orders?pagination[pageSize]=10&pagination[page]=1&pagination[withCount]=true&populate[song][populate]=*&filters[users][id]=${userInfo.id}&filters[payment][payment_status]=Succeeded`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const songs = await res.json();
  if (!userInfo.id) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      songs,
    },
  };
}

export default user;
