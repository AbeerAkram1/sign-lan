import { useState } from "react"; // ✅ Removed unused React import
import { DraggableItem, DroppableTarget } from "./drag-drop";
import { objectData } from "../data/objects";

const ObjectQuiz = () => {
  const [score, setScore] = useState(0);

  const handleDrop = (objectId, letterId) => {
    if (objectId === letterId) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-xl font-semibold">Match Objects with Alphabets</h2>
      <div className="flex gap-4 mt-3">
        {objectData.map((obj) => (
          <DraggableItem key={obj.id} id={obj.id} type="OBJECT">
            <img src={obj.image} alt={obj.object} className="w-16 h-16" />
          </DraggableItem>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        {objectData.map((letter) => (
          <DroppableTarget key={letter.id} id={letter.id} type="OBJECT" onDrop={handleDrop}>
            <div className="p-2 border rounded">{letter.letter}</div>
          </DroppableTarget>
        ))}
      </div>
      <p className="mt-3 font-bold">Score: {score}</p>
    </div>
  );
};

export default ObjectQuiz;
