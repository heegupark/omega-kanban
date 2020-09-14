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
    height: isDragging ? '145px' : '100%',
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
    <>
      {props.card.isArchived ? (
        <div className="card-archived" onClick={() => expandCard()}>
          {props.card.isCardCompleted ? (
            <div className="card-completed cursor-pointer">
              <div className="card-completed-head display-flex">
                <i className="fas fa-check-circle"></i>
                <div>{'Completed'}</div>
              </div>
              <div className="card-content-title text-grey">
                <s>{props.card.cardTitle}</s>
              </div>
              <div className="card-content-bottom text-grey display-flex">
                <div>
                  <i className="card-checklist-icon far fa-calendar-check"></i>
                </div>
                <div>{props.convertDate(props.card.updatedAt)}</div>
                <div className="ml-10px">
                  <i className="card-checklist-icon fas fa-list-ul"></i>
                </div>
                <div>{checklistStatus()}</div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      ) : (
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
          {props.card.isCardCompleted ? (
            <div className="card-completed cursor-pointer">
              <div className="card-completed-head display-flex">
                <i className="fas fa-check-circle"></i>
                <div>{'Completed'}</div>
              </div>
              <div className="card-content-title text-grey">
                <s>{props.card.cardTitle}</s>
              </div>
              <div className="card-content-bottom text-grey display-flex">
                <div>
                  <i className="card-checklist-icon far fa-calendar-check"></i>
                </div>
                <div>{props.convertDate(props.card.updatedAt)}</div>
                <div className="ml-10px">
                  <i className="card-checklist-icon fas fa-list-ul"></i>
                </div>
                <div>{checklistStatus()}</div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      )}
    </>
  );
}
export default Card;
