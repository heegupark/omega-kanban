import React from 'react';
import CardBody from './card-body';
import CardHead from './card-head';
import { Draggable } from 'react-beautiful-dnd';
import IColumnProps from './interfaces/icolumnprops';

function Column(props: IColumnProps) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided: any) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={`card-box bg-grey-${props.index % 2}`}>
            <CardHead {...props} dragHandleProps={provided.dragHandleProps} />
            <CardBody {...props} />
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
