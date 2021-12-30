import React, { useState , useEffect } from "react";
import { setCookie } from 'nookies'
import Header from "../components/header";
import Footer from "../components/footer";
import Login from "../components/login";


const login = () => {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: json,
          redirect: "follow",
        };
    
        fetch(`${process.env.URL}/api/auth/local`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
              console.log(result)
            if (result.error) {
              setError(true);
              setErrorMessage(result.error.message);
            } else {
                setError(false);
                setCookie(null, 'auth', result.jwt, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                  })
              window.location.replace("/user");
            }
          })
         
       
    };
 
  return (
    <>
      <div className="container">
        <Header rootClassName="rootClassName2"></Header>
        <div className="container1">
        <div className="error-container">
           { error && <span className="error-text">
              <span>{errorMessage}</span>
            </span>}
          </div>
        <Login onSubmit={handleSubmit}></Login>
        </div>
        <Footer rootClassName="rootClassName2"></Footer>
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
          .container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .error-container {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .error-text {
            color: var(--dl-color-danger-700);
          }
        `}
      </style>
    </>
  )
  
};

export default login;
