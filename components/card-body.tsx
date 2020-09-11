import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './card';
import Zoom from '@material-ui/core/Zoom';

function CardBody(props: any) {
  const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [cardBoxTitle, setCardBoxTitle] = useState('');

  useEffect(() => {
    if (props.cardBoxTitle) {
      setCardBoxTitle(props.cardBoxTitle);
    }
  }, []);

  const onDragStart = (result: any) => {
    setIsDragging(true);
    if (cardTitle.length < 1) {
      setIsAdding(false);
    }
  };

  const onDragEnd = (result: any) => {
    setIsDragging(false);
    props.onDragEnd(result);
  };

  const handleAddCard = () => {
    setIsAdding(true);
    // setCards([...cards, 1]);
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
      // setCards([...cards, { cardTitle }] as any);
      props.addCard(props.column.id, { cardTitle });
      setCardTitle('');
    }
    setIsAdding(false);
  };

  return (
    <div className="card-body">
      <Droppable droppableId={props.column.id}>
        {(provided: any, snapshot: any) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.column.cards.map((card: any, index: any) => {
              return (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided: any, snapshot: any) => (
                    <Card
                      card={card}
                      provided={provided}
                      isDragging={snapshot.isDragging}
                    />
                  )}
                </Draggable>
              );
            })}
            {isDragging ? (
              ''
            ) : isAdding ? (
              <Zoom in={isAdding}>
                <div className="h-top flex-center mb-25px">
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
export default CardBody;
