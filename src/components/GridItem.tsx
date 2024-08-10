import React from "react";

import styled from "styled-components";

const Items = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  margin-left: -1px;
  background-color: rgb(254, 255, 251);
  font-size: 28px;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #fff;
  }
  &.colored {
    background-color: #333;
    color: #fff;
  }
`;

interface Items {
  item?: React.ReactNode;
  i: number;
}

const GridItem: React.FC<Items> = ({ item, i }) => {
  return <Items>{item}</Items>;
};

export default GridItem;
