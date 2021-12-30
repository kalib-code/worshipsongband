import React, { useRef } from "react";

import PropTypes from "prop-types";

const Login = (props) => {
  //TODO - add error handling for password strength
  // const [password, setPassword] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      identifier: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    props.onSubmit(data);
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            ref={usernameRef}
            type="text"
            placeholder="Email"
            type="email"
            className="textinput input"
            // onChange={setEmail}
          />
          <input
            ref={passwordRef}
            type="text"
            placeholder="Password"
            type="password"
            className="textinput1 input"
            // onChange={setPassword}
          />
          <button className="button" type="submit">
            {props.button}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .login {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-danger-700);
            margin-bottom: var(--dl-space-space-unit);
          }
          .textinput {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .textinput1 {
            width: 100%;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .button {
            width: 100%;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

Login.defaultProps = {
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder",
  button: "SIGN IN",
};
Login.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Login;
