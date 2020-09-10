import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Top from './top';
import CardBox from './card-box';
import AddSection from './add-section';

function Board(props: any) {
  const onBeforeCapture = () => {
    /*...*/
  };

  const onBeforeDragStart = () => {
    /*...*/
  };

  const onDragStart = () => {
    /*...*/
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = () => {
    // the only one that is required
  };

  return (
    <>
      <Top projectName={props.projectName} />
      <div className="board">
        <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="droppable-1">
            {(provided: any, snapshot: any) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable key={0} draggableId="draggable-1" index={0}>
                  {(provided: any, snapshot: any) => (
                    <>
                      <CardBox
                        innerRef={provided.innerRef}
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                      />
                      {provided.placeholder}
                    </>
                  )}
                </Draggable>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddSection />
      </div>
    </>
  );
}
export default Board;
