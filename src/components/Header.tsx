import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Heading = styled.header`
  width: 100%;
  height: 100px;
  background-color: #faffe4;
  .head_inner {
    max-width: 75%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a.logo {
      display: block;
      img {
        width: 70px;
      }
    }
    a.write {
      img {
        width: 30px;
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Heading>
      <div className="head_inner">
        <Link to="/" className="logo">
          <img src="./logo.png" alt="logo" />
        </Link>
        <Link to="/write" className="write">
          <img src="./write.svg" alt="writepage" />
        </Link>
      </div>
    </Heading>
  );
};

export default Header;
