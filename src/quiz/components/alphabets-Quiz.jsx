import { useState } from "react";
import { DraggableItem, DroppableTarget } from "./drag-drop";
import { alphabetData } from "../data.js/alphabets.js";



const AlphabetsQuiz = () => {
  const [score, setScore] = useState(0);

  const handleDrop = (letterId, signId) => {
    if (letterId === signId) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-xl font-semibold">Match Alphabets with Signs</h2>
      <div className="flex gap-4 mt-3">
        {alphabetData.map((letter) => (
          <DraggableItem key={letter.id} id={letter.id} type="LETTER">
            <div className="p-2 border rounded bg-blue-200">{letter.letter}</div>
          </DraggableItem>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        {alphabetData.map((sign) => (
          <DroppableTarget
            key={sign.id}
            id={sign.id}
            type="LETTER"
            onDrop={(itemId) => handleDrop(itemId, sign.id)}
          >
            <img src={sign.image} alt={`Sign for ${sign.letter}`} className="w-16 h-16" />
          </DroppableTarget>
        ))}
      </div>
      <p className="mt-3 font-bold">Score: {score}</p>
    </div>
  );
};

export default AlphabetsQuiz;
