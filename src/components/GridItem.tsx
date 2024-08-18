import React from "react";

import styled from "styled-components";

type ItemComp = {
  b: string;
  selectClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Item = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fefffb;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: -1px;
  margin-bottom: -1px;
  cursor: pointer;
  &.keyon {
    background-color: #333;
    color: #fff;
  }
`;

const GridItem: React.FC<ItemComp> = ({ b, selectClick }) => {
  return <Item onClick={selectClick}>{b}</Item>;
};

export default GridItem;
