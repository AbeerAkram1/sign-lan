import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types"; // ✅ Import PropTypes

//Draggable Item Component
export const DraggableItem = ({ id, type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

// Droppable Target Component
export const DroppableTarget = ({ id, type, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: type,
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={isOver ? "bg-green-200" : "bg-gray-100"}>
      {children}
    </div>
  );
};

// ✅ Fix: Ensure PropTypes is imported and defined correctly
DraggableItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Can be string or number
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

DroppableTarget.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default { DraggableItem, DroppableTarget };
