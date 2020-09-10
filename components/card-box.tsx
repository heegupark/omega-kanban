import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './card';
import Zoom from '@material-ui/core/Zoom';

function CardBox(props: any) {
  const [cards, setCards] = useState([0]);
  const [isAdding, setIsAdding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [isCardBoxTileChanging, setIsCardBoxTileChanging] = useState(false);
  const [cardBoxTitle, setCardBoxTitle] = useState('');
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
  });

  const onDragStart = (result: any) => {
    // dropped outside the list
    setIsDragging(true);
    if (cardTitle.length < 1) {
      console.log('aaa');
      setIsAdding(false);
    }
  };

  const onDragEnd = (result: any) => {
    setIsDragging(false);

    // dropped outside the list
  };

  const handleAddCard = () => {
    console.log(1);
    setIsAdding(true);
    // setCards([...cards, 1]);
    console.log(cards);
  };

  const handleAddCardBlur = () => {
    if (cardTitle.length < 1) setIsAdding(false);
  };

  const handleCardTitleSubmit = () => {
    if (cardTitle.length > 0) {
      setCards([...cards, 1]);
      setCardTitle('');
    }
    setIsAdding(false);
  };

  const handleCardBoxTitleSubmit = () => {
    if (cardBoxTitle.length > 0) {
      // do something
    }
    setIsCardBoxTileChanging(false);
  };

  return (
    <div {...props.draggableProps}>
      <div className="card-box">
        <div className="subtitle-box h-top bg-skyblue text-white">
          <div
            ref={props.innerRef}
            {...props.dragHandleProps}
            className="icon-box"
          >
            <i className="far fa-lightbulb"></i>
          </div>
          {isCardBoxTileChanging ? (
            <form
              className="h-top flex-center mb-25px"
              onSubmit={() => handleCardBoxTitleSubmit()}
            >
              <input
                className="box-shadow-1 add-card-title"
                value={cardBoxTitle}
                autoFocus
                onBlur={() => setIsCardBoxTileChanging(false)}
                onChange={(e) => setCardBoxTitle(e.target.value)}
              ></input>
            </form>
          ) : (
            <div
              onClick={() => setIsCardBoxTileChanging(true)}
              className="project-subtitle cursor-text"
            >
              {cardBoxTitle}
            </div>
          )}
          <div
            onClick={() => handleCardBoxTitleChange()}
            className="project-subtitle cursor-text"
          >
            {cardBoxTitle}
          </div>
          <div className="cards-num flex-center">{cards.length}</div>
        </div>
        <div className="card-body">
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <Droppable droppableId="droppable-2">
              {(provided: any, snapshot: any) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {cards.map((card, index) => {
                    return (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided: any, snapshot: any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Card />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {isDragging ? (
                    ''
                  ) : isAdding ? (
                    <Zoom in={isAdding}>
                      <form
                        className="h-top flex-center mb-25px"
                        onSubmit={() => handleCardTitleSubmit()}
                      >
                        <input
                          className="box-shadow-1 add-card-title"
                          value={cardTitle}
                          autoFocus
                          onBlur={() => handleAddCardBlur()}
                          onChange={(e) => setCardTitle(e.target.value)}
                        ></input>
                      </form>
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
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}
export default CardBox;
