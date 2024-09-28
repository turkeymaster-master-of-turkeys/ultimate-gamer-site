import {
  DragDropContext,
  Draggable,
  DraggableProvided, DraggableStateSnapshot,
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
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{padding: 0}}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        marginBottom: 4,
                        ...styles.button,
                        ...provided.draggableProps.style,
                      }}
                      key={item.id}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>);
}

export default DragDropList;