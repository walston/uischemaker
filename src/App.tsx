import { DndContext } from "@dnd-kit/core";
import {} from "@jsonforms/vanilla-renderers";
import "./App.css";
import Draggable from "./Draggable";

function App() {
  const controls = [
    "Integer",
    "Artifact",
    "Vertical Layout",
    "Horizontal Layout",
    "Tabbed Section",
  ];
  return (
    <div className="App">
      <DndContext>
        <div className="bucket">
          {controls.map((name) => (
            <Draggable name={name} />
          ))}
        </div>
        <div className="form"></div>
      </DndContext>
    </div>
  );
}

export default App;
