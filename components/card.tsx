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
    // minHeight: '150px',
    height: isDragging ? '100px' : '100%',
  });

  const expandCard = () => {
    props.setCardForOpen(props.column.id, props.card.id);
    props.setOpen(true);
  };

  const checklistStatus = () => {
    const length = props.card.checklists.length;
    const completed = props.card.checklists.filter(
      (checklist: any) => checklist.isChecked
    );
    return `${completed.length} / ${length}`;
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
      <div className="card cursor-pointer">
        <div className="card-content-title">{props.card.cardTitle}</div>
        <div className="card-content-note">{props.card.note}</div>
        <div className="card-content-bottom display-flex">
          <div>
            <i className="card-checklist-icon fas fa-list-ul"></i>
          </div>
          <div>{checklistStatus()}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
