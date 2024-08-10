import React from "react";

import styled from "styled-components";

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
      label {
        font-size: 25px;
      }
      input {
        width: 100%;
        padding: 10px 5px;
        margin-top: 15px;
        font-size: 18px;
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
      </form>
    </Writer>
  );
};

export default Write;
