import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AlphabetsQuiz from "./quiz/components/alphabets-Quiz";
import ObjectQuiz from "./quiz/components/object-Quiz";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-center">Sign Language Quiz</h1>
        <AlphabetsQuiz />
        <ObjectQuiz />
      </div>
    </DndProvider>
  );
}

export default App;
