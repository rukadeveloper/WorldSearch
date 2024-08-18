import React from "react";

import styled from "styled-components";
import GridItems from "./GridItems";

const Mains = styled.main`
  padding: 0 12.5%;
  > h2 {
    padding-top: 100px;
    font-size: 30px;
    font-weight: 700;
  }
  > .wrapper {
    margin-top: 20px;
    display: flex;
    .problemLists {
      padding-left: 15px;
      padding-top: 10px;
      span {
        display: block;
        padding-bottom: 15px;
        font-size: 18px;
      }
    }
  }
`;

const Main: React.FC = () => {
  const Board = [
    ["N", "O", "S", "U", "R", "D", "M", "T", "T", "R", "Y", "S"],
    ["T", "U", "E", "F", "R", "E", "E", "A", "E", "S", "E", "W"],
    ["S", "R", "T", "L", "R", "B", "N", "R", "E", "S", "S", "E"],
    ["S", "S", "V", "G", "R", "R", "H", "L", "I", "U", "R", "E"],
    ["S", "O", "I", "O", "E", "O", "D", "L", "L", "R", "O", "R"],
    ["E", "N", "R", "S", "O", "E", "O", "A", "O", "W", "H", "O"],
    ["L", "G", "O", "E", "M", "I", "N", "E", "V", "E", "E", "T"],
    ["R", "I", "T", "R", "O", "U", "B", "L", "E", "I", "T", "C"],
    ["A", "I", "S", "E", "O", "T", "H", "I", "S", "G", "I", "I"],
    ["E", "N", "O", "C", "O", "E", "O", "C", "T", "R", "H", "P"],
    ["F", "R", "B", "E", "L", "O", "N", "G", "O", "E", "W", "L"],
    ["T", "O", "G", "E", "T", "H", "E", "R", "R", "E", "L", "R"],
    ["S", "R", "G", "M", "E", "A", "N", "E", "Y", "R", "R", "E"],
    ["E", "S", "H", "O", "N", "A", "N", "O", "R", "R", "H", "I"],
  ];

  const problemList = [
    "RED",
    "OUR SONG",
    "TOGETHER",
    "TROUBLE",
    "FEARLESS",
    "MEAN",
    "MINE",
    "WHITE HORSE",
    "RONAN",
    "PICTURE",
    "BELONG",
  ];

  const correctList = [];

  const selectClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;

    target.classList.add("keyon");
  };

  return (
    <Mains>
      <h2>World Search Game</h2>
      <div className="wrapper">
        <div className="puzzle_grid">
          {Board.map((bd, id) => (
            <GridItems bd={bd} selectClick={selectClick} key={id} />
          ))}
        </div>
        <div className="problemLists">
          {problemList.map((pl, idx) => (
            <span key={idx}>{pl}</span>
          ))}
        </div>
      </div>
    </Mains>
  );
};

export default Main;
