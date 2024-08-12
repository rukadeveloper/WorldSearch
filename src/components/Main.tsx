import React, { useEffect, useState, useRef } from "react";

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
      &.line {
        text-decoration: line-through;
      }
    }
  }
`;

type itemType = {
  item: React.ReactNode;
  index: number | null;
};

type ansType = {
  content: string;
  realAnswer: React.ReactNode[];
  realIndex: number[][];
  isAnswer: boolean;
  index: number;
};

const Main: React.FC = () => {
  const alpha =
    "SMEMARGEHRPLMOCMRBURNSASIKOSENELESONMTRRSNGALISAAHUERSRYTATRHESOSEATEPPLORTTULMNONRUMSYTNPPRAARAEUWOYAAMCMIARTIRNSRPLELMBELCNTAANOAEELLOERLTEMBMSCISLAPTDEARRCEOIBHYKABR";

  const isFirstCompassion = useRef(true);

  const answerList = ["HOMER", "MARGE", "BART"];

  const [isEntered, setIsEntered] = useState<boolean>(false);

  const [itemArray, setItemArray] = useState<itemType[]>([]);

  const [indexArr, setIndexArr] = useState<(number | null)[]>([]);

  const [answerArr, setAnswerArr] = useState<ansType[]>([]);

  const selectClick = (
    e: React.MouseEvent<HTMLDivElement>,
    item: React.ReactNode,
    idx: number
  ) => {
    if (!isEntered) {
      setItemArray((prev) => [...prev, { item: item, index: idx }]);
    } else {
      e.preventDefault();
    }
  };

  const checkAnswer = () => {
    console.log("체크하기~~~~");
    if (answerArr.length !== 0 && itemArray.length !== 0) {
      const updated = answerArr.map((aa) => {
        const isCorrect = Array.from(aa.content).every(
          (aaa, i) => aaa === itemArray[i].item
        );
        let realAnswerOne: React.ReactNode[] = [];
        let realAnswerTwo: React.ReactNode[] = [];
        let realIndexOne: number[] = [];
        let realIndexTwo: number[][] = [];

        if (isCorrect) {
          Array.from(aa.content).map((aaaa, ii) => {
            if (aaaa === itemArray[ii].item) {
              realAnswerOne.push(aaaa);
              realIndexOne.push(itemArray[ii]?.index!);
            }
          });
        }

        realAnswerTwo.push(realAnswerOne);
        realIndexTwo.push(realIndexOne);
        return {
          ...aa,
          isAnswer: isCorrect,
          realAnswer: realAnswerTwo,
          realIndex: realIndexTwo,
        };
      });
      setAnswerArr(updated);
    }
  };

  const keyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      setIsEntered(true);
    }
  };

  const disting = (i: number): boolean => {
    return indexArr.includes(i);
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
            if (
              dist === 1 ||
              dist === -1 ||
              dist === -1 * (itemArray.length - 1) ||
              dist === itemArray.length - 1
            ) {
              // 아무것도 하지 않음
            } else {
              itemArray.pop();
            }
          } else if (otherDist === -13 || otherDist === 13) {
            if (
              dist === -13 ||
              dist === 13 ||
              dist === 13 * (itemArray.length - 1) ||
              dist === -13 * (itemArray.length - 1)
            ) {
              // 아무것도 하지 않음
            } else {
              itemArray.pop();
            }
          } else if (otherDist === -11 || otherDist === 11) {
            if (
              dist === -11 ||
              dist === 11 ||
              dist === -11 * (itemArray.length - 1) ||
              dist === 11 * (itemArray.length - 1)
            ) {
              // 아무것도 안한다.
            } else {
              itemArray.pop();
            }
          } else if (otherDist === 12 || otherDist === -12) {
            if (
              dist === 12 ||
              dist === -12 ||
              dist === 12 * (itemArray.length - 1) ||
              dist === -12 * (itemArray.length - 1)
            ) {
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
      console.log(itemArray);
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

  useEffect(() => {
    if (itemArray.length === 0) {
      answerList.map((al, i) => {
        setAnswerArr((prev) => [
          ...prev,
          {
            content: al,
            isAnswer: false,
            index: i,
            realAnswer: [],
            realIndex: [],
          },
        ]);
      });
    }
  }, []);

  useEffect(() => {
    if (answerArr.length !== 0) {
      console.log(answerArr);
    }
  }, [answerArr]);

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
              isActive={disting(i)}
              selectClick={selectClick}
              isEntered={isEntered}
            />
          ))}
        </div>
      </div>
      <div className="answerList">
        {answerArr.map((av, i) => (
          <span key={i} className={`${av.isAnswer ? "line" : ""}`}>
            {av.content}
          </span>
        ))}
      </div>
    </Mains>
  );
};

export default Main;
