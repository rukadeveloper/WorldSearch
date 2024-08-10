import React, { useState, useCallback, useEffect } from "react";

import styled from "styled-components";
import GridItem from "./GridItem";

const Mains = styled.main`
  padding: 0 12.5%;
  > h2 {
    padding-top: 100px;
    font-size: 30px;
    font-weight: 700;
  }
  > .puzzle_grid {
    width: 600px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Main: React.FC = () => {
  const alpha =
    "SMEMARGEHRPLMOCMRBURNSASIKOSENELESONMTRRSNGALISAAHUERSRYTATRHESOSEATEPPLORTTULMNONRUMSYTNPPRAARAEUWOYAAMCMIARTIRNSRPLELMBELCNTAANOAEELLOERLTEMBMSCISLAPTDEARRCEOIBHYKABR";

  return (
    <Mains>
      <h2>World Search Game</h2>
      <div className="puzzle_grid">
        {Array.from(alpha).map((item: string, i: number) => (
          <GridItem item={item} key={i} i={i} />
        ))}
      </div>
    </Mains>
  );
};

export default Main;
