import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import "./Draggable.css";

type Props = { name: string };
export default function DraggableControl({ name }: Props) {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: name,
  });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="Draggable"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {name}
    </div>
  );
}
