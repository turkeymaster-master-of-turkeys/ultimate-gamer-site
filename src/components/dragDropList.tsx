import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DropResult
} from "react-beautiful-dnd";
import * as styles from "../styles";
import React from "react";

type DragDropListProps = {
  items: {id: string, content: string}[]
  setItems: (items: {id: string, content: string}[]) => void
}

const DragDropList = ({ items, setItems }: DragDropListProps) => {
    const onDragEnd = (result: DropResult) => {
      if (!result.destination) return;
      const reorderedItems = Array.from(items);
      const [movedItem] = reorderedItems.splice(result.source.index, 1);
      reorderedItems.splice(result.destination.index, 0, movedItem);
      setItems(reorderedItems);
    };

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{listStyleType: 'none', padding: 0}}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: DraggableProvided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...styles.button,
                        marginBottom: 4,
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder} {/* This keeps space for the dragging item */}
            </ul>
          )}
        </Droppable>
      </DragDropContext>);
}

export default DragDropList;