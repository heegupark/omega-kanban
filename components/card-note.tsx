import React, { useState, KeyboardEvent } from 'react';
import INewCard from './interfaces/inewcard';
import ICommonProps from './interfaces/icommonprops';

interface ICardNoteProps extends ICommonProps {
  updateCard: (columnId: string, card: INewCard) => void;
}

function CardNote(props: ICardNoteProps) {
  const [note, setNote] = useState(props.currentCard.note);
  const [isNoting, setIsNoting] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const newCard = {
        _id: props.currentCard._id,
        cardTitle: undefined,
        note: note,
        isCardCompleted: undefined,
        isArchived: undefined,
        dueDate: null,
      };
      props.updateCard(props.currentColumn._id, newCard);
      setIsNoting(false);
    }
  };

  return (
    <div className="card-deatil-note-box">
      {props.currentCard.isArchived ? (
        note.length < 1 ? (
          <div className="card-detail-note">This task has no notes.</div>
        ) : (
          <div className="card-detail-note">
            {note.length > 70 ? note.substr(0, 40) + '...' : note}
          </div>
        )
      ) : isNoting ? (
        <input
          id={props.currentCard._id}
          className="card-deatil-note-input border-none"
          type="text"
          autoFocus
          onChange={(e) => setNote(e.target.value)}
          value={note}
          onBlur={() => setIsNoting(false)}
          onKeyDown={(e: KeyboardEvent) => handleKeyDown(e)}
        />
      ) : note.length < 1 ? (
        <div
          onClick={() => setIsNoting(true)}
          className="card-detail-note cursor-text"
        >
          This task has no notes.
        </div>
      ) : (
        <div
          onClick={() => setIsNoting(true)}
          className="card-detail-note cursor-text"
        >
          {note.length > 70 ? note.substr(0, 40) + '...' : note}
        </div>
      )}
    </div>
  );
}
export default CardNote;
