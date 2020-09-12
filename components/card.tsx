import React from 'react';

function Card(props: any) {
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    padding: '15px',
    margin: '5px 10px',
    border: isDragging
      ? '2px solid rgb(0, 170, 255)'
      : '1px solid rgb(225,225,225)',
    borderRadius: '10px',
    boxShadow:
      'rgba(0, 0, 0, 0.02) 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px',
    background: isDragging ? 'rgb(241,251,255)' : 'white',
    ...draggableStyle,
    height: isDragging ? '100px' : '150px',
  });

  const expandCard = () => {
    props.handleModalOpen(props.column.id, props.card.id);
  };

  return (
    <div
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      style={getItemStyle(
        props.isDragging,
        props.provided.draggableProps.style
      )}
      onClick={() => expandCard()}
    >
      <div className="card">
        <div className="card-content-title">{props.card.cardTitle}</div>
      </div>
    </div>
  );
}
export default Card;
