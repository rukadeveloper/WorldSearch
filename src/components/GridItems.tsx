import React from "react";

import GridItem from "./GridItem";

import styled from "styled-components";

const Items = styled.div`
  display: flex;
`;

type BoardProps = {
  bd: string[];
  selectClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const GridItems: React.FC<BoardProps> = ({ bd, selectClick }) => {
  return (
    <Items>
      {bd.map((b, i) => (
        <GridItem b={b} selectClick={selectClick} key={i} />
      ))}
    </Items>
  );
};

export default GridItems;
