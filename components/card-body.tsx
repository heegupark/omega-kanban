import React, { useState, useEffect } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './card';
import Zoom from '@material-ui/core/Zoom';

function CardBody(props: any) {
  // const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cardTitle, setCardTitle] = useState('');

  const handleAddCard = () => {
    setIsAdding(true);
  };

  const handleAddCardBlur = () => {
    if (cardTitle.length < 1) setIsAdding(false);
  };

  const handleKeyDownForAddCard = (event: any) => {
    if (event.key === 'Enter') {
      handleCardTitleSubmit();
    }
  };

  const handleCardTitleSubmit = () => {
    if (cardTitle.length > 0) {
      props.addCard(props.column.id, cardTitle);
      setCardTitle('');
    }
    setIsAdding(false);
  };

  return (
    <>
      {props.column.id === 'archive' ? (
        <div>
          {props.column.cards.map((card: any, index: any) => {
            return (
              <div key={card.id}>
                <Card
                  card={card}
                  setOpen={props.setOpen}
                  column={props.column}
                  setCardForOpen={props.setCardForOpen}
                  convertDate={props.convertDate}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Droppable droppableId={props.column.id}>
          {(provided: any, snapshot: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.column.cards.map((card: any, index: any) => {
                return (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided: any, snapshot: any) => (
                      <Card
                        card={card}
                        setOpen={props.setOpen}
                        column={props.column}
                        provided={provided}
                        isDragging={snapshot.isDragging}
                        setCardForOpen={props.setCardForOpen}
                        convertDate={props.convertDate}
                      />
                    )}
                  </Draggable>
                );
              })}
              {isDragging ? (
                ''
              ) : isAdding ? (
                <Zoom in={isAdding}>
                  <div className="h-top mt-5px flex-center mb-25px">
                    <input
                      className="box-shadow-1 w-100per add-card-title"
                      value={cardTitle}
                      autoFocus
                      onBlur={() => handleAddCardBlur()}
                      onKeyDown={(event) => handleKeyDownForAddCard(event)}
                      onChange={(e) => setCardTitle(e.target.value)}
                    ></input>
                  </div>
                </Zoom>
              ) : (
                <div className="h-top flex-center mb-25px cursor-pointer">
                  <i
                    onClick={() => handleAddCard()}
                    className="add-card-icon box-shadow-1 fas fa-plus"
                  ></i>
                </div>
              )}
              {!isAdding && props.column.cards.length === 0 && (
                <div className="no-task flex-center flex-column">
                  <div>
                    <i className="no-task-check text-grey far fa-check-circle"></i>
                  </div>
                  <div className="no-task-title text-grey">No Task</div>
                  <div className="no-task-desc text-grey">Drag tasks here</div>
                  <div className="no-task-desc text-grey">
                    or click + to add new tasks
                  </div>
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </>
  );
}
export default CardBody;