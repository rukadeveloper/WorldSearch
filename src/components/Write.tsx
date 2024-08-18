import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import { getDatabase, ref, set } from "firebase/database";

const Writer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  > p {
    margin-top: 50px;
    font-size: 18px;
    line-height: 1.4;
  }
  form {
    width: 100%;
    margin-top: 50px;
    > div {
      width: 100%;
      margin-bottom: 20px;
      label,
      input {
        display: block;
      }
      label,
      h2 {
        font-size: 25px;
      }
      input {
        width: 100%;
        padding: 10px 5px;
        margin-top: 15px;
        font-size: 18px;
        outline: none;
      }
    }
    > div.wordList {
      .wordLists {
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        > div {
          width: 25%;
          margin-left: -1px;
          margin-top: -1px;
          > label {
            display: none;
          }
          > input {
            width: 100%;
            margin: 0;
            box-sizing: border-box;
          }
        }
      }
    }
    > .submitBtn {
      button {
        width: 100%;
        padding: 20px 0;
        font-size: 18px;
        border: none;
        background-color: rgb(247, 193, 9);
      }
    }
  }
`;

const Write: React.FC = () => {
  return (
    <Writer>
      <p>
        Make your own word search game on any topic you like, simply by
        providing between 10 and 30 words. Once submitted, your puzzle will be
        instantly playable on-line as well as easily printed, so you can share
        it with friends. Instructions are available at the bottom of this page
      </p>
      <form action="">
        <div className="title">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className="desc">
          <label htmlFor="desc">Description</label>
          <input type="text" id="desc" name="desc" />
        </div>

        <div className="wordList">
          <h2>Word List</h2>
          <div className="wordLists"></div>
        </div>

        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Writer>
  );
};

export default Write;
