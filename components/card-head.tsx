import React, { useState } from 'react';

function CardHead(props: any) {
  const [isCardBoxTileChanging, setIsCardBoxTileChanging] = useState(false);
  const [cardBoxTitle, setCardBoxTitle] = useState('');

  const handleCardBoxTitleBlur = () => {};
  const handleKeyDownForCardBoxTitle = (event: any) => {
    if (event.key === 'Enter') {
      handleCardBoxTitleSubmit();
    }
  };
  const handleCardBoxTitleSubmit = () => {
    if (cardBoxTitle.trim().length > 0) {
      // do something
    }
    setIsCardBoxTileChanging(false);
  };
  return (
    <div className="subtitle-box h-top bg-skyblue text-white">
      <div {...props.dragHandleProps} className="icon-box">
        <i className="far fa-lightbulb"></i>
      </div>
      <div
        onClick={() => setIsCardBoxTileChanging(true)}
        className="project-title w-65per h-top cursor-text"
      >
        {isCardBoxTileChanging ? (
          <div
            className="h-top flex-center w-90per"
            onBlur={() => handleCardBoxTitleBlur()}
          >
            <input
              className="w-100per change-project-title"
              value={cardBoxTitle}
              autoFocus
              onKeyDown={(event) => handleKeyDownForCardBoxTitle(event)}
              onBlur={() => setIsCardBoxTileChanging(false)}
              onChange={(e) => {
                if (e.target.value.trim().length < 1) {
                  setCardBoxTitle(e.target.value.trim());
                } else {
                  setCardBoxTitle(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <div className="p-10px">{props.column.title}</div>
        )}
      </div>
      <div className="cards-num flex-center">{props.column.cards.length}</div>
    </div>
  );
}
export default CardHead;
