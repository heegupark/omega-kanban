import React, { useState } from 'react';
import INewCard from './interfaces/inewcard';
import ICommonProps from './interfaces/icommonprops';

interface CardHeaderProps extends ICommonProps {
  updateCard: (columnId: string, card: INewCard) => void;
  convertDate: (date: Date) => string;
  handleOpen: () => void;
  setCategory: (category: string) => void;
  handleModalClose: () => void;
}

function CardHeader(props: CardHeaderProps) {
  const [isCardCompleted, setIsCardCompleted] = useState(
    props.currentCard.isCardCompleted
  );

  const handleCardComplete = () => {
    //props.completeCard(props.currentColumn._id, props.currentCard._id);
    const newCard = {
      _id: props.currentCard._id,
      cardTitle: undefined,
      note: undefined,
      isCardCompleted: true,
      isArchived: undefined,
      dueDate: null,
    };
    props.updateCard(props.currentColumn._id, newCard);
    setIsCardCompleted(true);
  };

  const daysDifference = (d0: Date, d1: Date) => {
    let diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
    let result = 'a day';
    const diffNum = Math.round(diff / 8.64e7);
    if (diffNum > 1 && diffNum < 2) {
      result = 'two days';
    } else if (diffNum >= 2 && diffNum < 30) {
      result = `${diffNum} days`;
    } else if (diffNum >= 30 && diffNum < 32) {
      result = `a month`;
    } else if (diffNum >= 32 && diffNum < 62) {
      result = `one month and ${diffNum - 31} days`;
    } else if (diffNum >= 62 && diffNum < 365) {
      result = `${Math.floor(diffNum / 30)} months and ${
        diffNum - 30 * Math.floor(diffNum / 30)
      } days`;
    }
    return result;
  };
  return (
    <div className="card-detail-header">
      {props.currentCard.isArchived ? (
        <div className="card-modal-header">
          <button className="archive-btn">Archived</button>
          <div className="card-modal-header-check">
            <i className="text-green fas fa-check-circle"></i>
          </div>
          <div>
            <div className="text-grey">{`Completed on ${props.convertDate(
              props.currentCard.updatedAt
            )}`}</div>
            <div>{`Time to complete : ${daysDifference(
              props.currentCard.updatedAt,
              props.currentCard.createdAt
            )}`}</div>
          </div>
        </div>
      ) : isCardCompleted ? (
        <div className="card-modal-header">
          <button
            onClick={() => {
              props.setCategory('archive');
              props.handleOpen();
            }}
            className="archive-btn cursor-pointer"
          >
            Archive
          </button>
          <div className="card-modal-header-check">
            <i className="text-green fas fa-check-circle"></i>
          </div>
          <div>
            <div className="text-grey">{`Completed on ${props.convertDate(
              props.currentCard.updatedAt
            )}`}</div>
            <div>{`Time to complete: ${daysDifference(
              props.currentCard.updatedAt,
              props.currentCard.createdAt
            )}`}</div>
          </div>
        </div>
      ) : (
        <div className="card-modal-header">
          <button
            onClick={() => handleCardComplete()}
            className="complete-btn cursor-pointer border-none bg-head-1"
          >
            Complete
          </button>
        </div>
      )}
      <div
        onClick={() => props.handleModalClose()}
        className="card-detail-close float-right cursor-pointer"
      >
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
export default CardHeader;
