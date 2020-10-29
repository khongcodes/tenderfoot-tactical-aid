///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React
// 2. Data
// 3. Styles

import React from "react";

import openingTextJson from "../data/openingText.json";

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

const actorsInScene = ["The Fog", "Willow"] as const;

type DialogueLineType = {
  speaker: typeof actorsInScene[number]
  text: string;
};

type OpeningTextJsonType = DialogueLineType[];

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const OpeningText = () => {
  const openTextArr = openingTextJson as OpeningTextJsonType;
  const displayDialogue = (dialogueLine: DialogueLineType) => {
    return (
      <div className={`openingTextDialogue`}>
        <p>{dialogueLine.speaker}</p>
        <p>{dialogueLine.text}</p>
      </div>
    )
  };

  return (
    <div className="openingTextContainer">
      {openTextArr.map((dialogueLine: DialogueLineType) => displayDialogue(dialogueLine))}
    </div>
  )
}

const Home = () => {
  return (
    <div className="homeViewRoot">
      <OpeningText />
    </div>
  )
}

export default Home;