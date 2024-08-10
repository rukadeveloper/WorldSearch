import React, { useEffect, useState } from "react";

import styled from "styled-components";
import GridItem from "./GridItem";

const Mains = styled.main`
  padding: 0 12.5%;
  display: flex;
  > div {
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
  }
  > .answerList {
    padding-top: 170px;
    span {
      display: block;
      font-size: 20px;
      padding-bottom: 15px;
      &.ans {
        text-decoration: line-through;
      }
    }
  }
`;

type itemType = {
  item: React.ReactNode;
  index: number | null;
};

const Main: React.FC = () => {
  const alpha =
    "SMEMARGEHRPLMOCMRBURNSASIKOSENELESONMTRRSNGALISAAHUERSRYTATRHESOSEATEPPLORTTULMNONRUMSYTNPPRAARAEUWOYAAMCMIARTIRNSRPLELMBELCNTAANOAEELLOERLTEMBMSCISLAPTDEARRCEOIBHYKABR";

  const answerList = ["HOMER", "MARGE", "BART"];

  const [isEntered, setIsEntered] = useState<boolean>(false);

  const [itemArray, setItemArray] = useState<itemType[]>([]);

  const [indexArr, setIndexArr] = useState<(number | null)[]>([]);

  const selectClick = (item: React.ReactNode, idx: number) => {
    setItemArray((prev) => [...prev, { item: item, index: idx }]);
  };

  const checkAnswer = () => {};

  const keyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      setIsEntered(true);
    }
  };

  useEffect(() => {
    if (itemArray.length !== 0) {
      // [{},{}]
      if (itemArray.length >= 2) {
        const dist =
          itemArray[itemArray.length - 1]?.index! -
          itemArray[itemArray.length - 2]?.index!;
        if (itemArray.length == 2) {
          if (
            dist === 1 ||
            dist === -1 ||
            dist === 11 ||
            dist === 12 ||
            dist === 13 ||
            dist === -11 ||
            dist === -12 ||
            dist === -13
          ) {
            // 아무것도 하지 않음
          } else {
            itemArray.pop();
          }
        } else if (itemArray.length > 2) {
          const otherDist = itemArray[1].index! - itemArray[0].index!;
          if (otherDist == 1 || otherDist == -1) {
            if (dist === 1 || dist === -1) {
              // 아무것도 하지 않음
            } else {
              itemArray.pop();
            }
          } else if (otherDist === -13 || otherDist === 13) {
            if (dist === -13 || dist === 13) {
              // 아무것도 하지 않음
            } else {
              itemArray.pop();
            }
          } else if (otherDist === -11 || otherDist === 11) {
            if (dist === -11 || dist === 11) {
              // 아무것도 안한다.
            } else {
              itemArray.pop();
            }
          } else if (otherDist === 12 || otherDist === -12) {
            if (dist === 11 || dist === -11) {
              // not do
            } else {
              itemArray.pop();
            }
          }
        }
      }
      setIndexArr((prev) => {
        // itemArray에서 새로운 인덱스만 필터링
        const newIndices = itemArray
          .map((v) => v.index) // 인덱스 추출
          .filter((index) => index !== null && !prev.includes(index)); // 이전 상태에 없는 인덱스만 필터링

        // 새로운 상태를 반환
        return [...prev, ...newIndices];
      });
    }
  }, [itemArray]);

  useEffect(() => {
    if (indexArr.length !== 0) {
      console.log(indexArr);
    }
  }, [indexArr]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);

    if (isEntered) {
      checkAnswer();
    }

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [isEntered]);

  return (
    <Mains>
      <div>
        <h2>World Search Game</h2>
        <div className="puzzle_grid">
          {Array.from(alpha).map((item: string, i: number) => (
            <GridItem
              item={item}
              key={i}
              i={i}
              selectClick={selectClick}
              isActive={indexArr.includes(i)}
            />
          ))}
        </div>
      </div>
      <div className="answerList">
        {answerList.map((av) => (
          <span className={`${isAnswer ? "ans" : ""}`}>{av}</span>
        ))}
      </div>
    </Mains>
  );
};

export default Main;
