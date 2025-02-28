import { useState } from "react";
import { DraggableItem, DroppableTarget } from "./drag-drop";
import objectData from "../data/objects.js"; // ✅ Correct import path

const ObjectQuiz = () => {
  const [score, setScore] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("easy"); // ✅ Default level

  // Get objects based on selected difficulty
  const currentObjects = objectData[selectedLevel] || [];

  const handleDrop = (objectId, letterId) => {
    const matchedObject = currentObjects.find(obj => obj.id === objectId);
    if (matchedObject && matchedObject.letter === letterId) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-xl font-semibold text-center mb-4">Match Objects with Alphabets</h2>

      {/* Level Selection */}
      <div className="text-center mb-4">
        <label className="text-lg font-semibold mr-2">Select Difficulty:</label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="p-2 border rounded-md bg-white shadow-md"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Draggable Objects (Fixed Size 200x200) */}
      <div className="flex flex-wrap justify-center gap-4">
        {currentObjects.map((obj) => (
          <DraggableItem key={obj.id} id={obj.id} type="OBJECT">
            <div className="w-52 h-52 bg-white shadow-lg rounded-lg flex flex-col items-center p-4">
              <img
                src={obj.image}
                alt={obj.object}
                className="w-48 h-48 object-cover rounded-md"
                style={{ width: "200px", height: "200px" }} // ✅ Ensures consistent size
              />
              <p className="text-lg font-bold mt-2">{obj.object}</p>
            </div>
          </DraggableItem>
        ))}
      </div>

      {/* Droppable Letters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {currentObjects.map((obj) => (
          <DroppableTarget key={obj.id} id={obj.letter} type="OBJECT" onDrop={handleDrop}>
            <div className="w-16 h-16 flex items-center justify-center border rounded-lg bg-gray-200 text-xl font-bold">
              {obj.letter}
            </div>
          </DroppableTarget>
        ))}
      </div>

      <p className="mt-6 text-center font-bold text-lg">Score: {score}</p>
    </div>
  );
};

export default ObjectQuiz;
