import React from "react";

import styled from "styled-components";

const Mains = styled.main`
  padding: 0 12.5%;
  > h2 {
    padding-top: 100px;
    font-size: 30px;
  }
`;

const Main: React.FC = () => {
  return (
    <Mains>
      <h2>The Simson Characters</h2>
    </Mains>
  );
};

export default Main;
