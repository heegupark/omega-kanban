import React from 'react';
import CardBody from './card-body';
import CardHead from './card-head';
import { Draggable } from 'react-beautiful-dnd';

function Column(props: any) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided: any) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="card-box">
            <CardHead
              column={props.column}
              dragHandleProps={provided.dragHandleProps}
            />
            <CardBody
              reorder={props.reorder}
              column={props.column}
              index={props.index}
              onDragEnd={props.onDragEnd}
              addCard={props.addCard}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
