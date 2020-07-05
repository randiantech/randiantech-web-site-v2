import React, { useState } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

interface LoginFormState {
  isMobile: boolean;
  isError: boolean;
  isLoading: boolean;
  error: string;
}

const Wrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: 700px 1fr;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    height: calc(100vh - 100px);

    .login-pane {
      display: grid;
      text-align: left;
      padding: 50px;
      border-right: 1px solid var(--main-app-color);
      grid-template-rows: 100px 100px 1fr 100px;

      .item-container {
        display: grid;
        text-align: left;
        align-items: center;
        max-height: 100px;
        grid-template-columns: 150px 1fr;
        .item-input {
          font-size: 20px;
          margin-top: 10px;
          height: 30px;
          width: 100%;
        }
      }

      .item-actions-container {
        display: grid;
        padding-top: 50px;
        grid-template-rows: 50px 50px;
        row-gap: 25px;

        .sign-in-btn {
          width: 100%;
          text-align: center;
        }
      }
    }

    .img-pane {
      background: url(/login.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .error {
    border: 5px solid var(--main-app-color);
    text-align: center;
    align-items: center;
    display: grid;
    background: var(--main-app-color);
  }
`;

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setTimeout(() => setIsLoading(true), 300);
    setTimeout(() => {
      setError("Invalid Credentials.");
      setIsLoading(false);
    }, 2500);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="login-pane">
          <div className="item-container">
            <label>Email</label>
            <input type="text" className="item-input" />
          </div>
          <div className="item-container">
            <label>Password</label>
            <input type="password" className="item-input" />
          </div>
          <div className="item-actions-container">
            <div
              className="rt-access-btn rt-rounded sign-in-btn"
              onClick={() => handleSignIn()}
            >
              Sign In
            </div>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="img-pane" />
      </div>
      {isLoading && (
        <div className="loading">
          <ReactLoading type="spin" color="#ff4970" />
        </div>
      )}
    </Wrapper>
  );
};
