import { DndContext, useDraggable } from "@dnd-kit/core";
import {} from "@jsonforms/vanilla-renderers";
import "./App.css";

function App() {
  const controls = [
    "Integer",
    "Artifact",
    "Vertical Layout",
    "Horizontal Layout",
  ];
  return (
    <div className="App">
      <DndContext>
        <div className="bucket">
          {controls.map((name) => {
            const { setNodeRef } = useDraggable({ id: name });
            return (
              <div ref={setNodeRef}>
                <code>{name}</code>
              </div>
            );
          })}
        </div>
        <div className="form"></div>
      </DndContext>
    </div>
  );
}

export default App;
