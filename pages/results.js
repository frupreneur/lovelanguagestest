import React from "react";
import { useGlobalState } from "@/state";

import { IoTimer } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";

export default function Results() {
  console.log("start");
  const { state } = useGlobalState();
  const name = state.cache.name;
  const scores = Object.entries(state.cache.score)
    .sort((x, y) => y[1] - x[1])
    .map((x) => {
      let name;
      if (x[0] === "s") {
        name = "Acts of Service";
      } else if (x[0] === "t") {
        name = "Quality Time";
      } else if (x[0] === "a") {
        name = "Words of Affirmation";
      } else if (x[0] === "pt") {
        name = "Physical Touch";
      } else if (x[0] === "g") {
        name = "Receiving Gifts";
      }
      return { ll: name, score: x[1] };
    });

  return (
    <div className="site-wrap" id="site-wrap">
      <div className="quizContainer">
        <div className="question-wrapper">
          <h2
            style={{ textAlign: "left" }}
          >{`${name}'s Love Language Test`}</h2>
          <div className="questionContainer">
            {scores.map((x, i) => {
              return (
                <div
                  style={{ fontWeight: "bold", textAlign: "left" }}
                  className="llc"
                  key={i}
                >
                  {resultIcon(x.ll)}
                  <div>
                    <span>{x.ll}: </span>
                    <span style={{ color: "#843897" }}>
                      {((x.score / 30) * 100).toFixed() + "%"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function resultIcon(i) {
  if (i === "Physical Touch") return <GiLovers />;
  if (i === "Receiving Gifts") return <FaGift />;
  if (i === "Words of Affirmation") return <BsChatTextFill />;
  if (i === "Quality Time") return <IoTimer />;
  if (i === "Acts of Service") return <RiUserSettingsFill />;

  return <GiLovers />;
}
