import React, { useState } from 'react';
import ICommonProps from './interfaces/icommonprops';

interface CardNoteProps extends ICommonProps {
  currentCardId: string;
  updateCardNote: (columnId: string, cardId: string, note: string) => void;
}

function CardNote(props: CardNoteProps) {
  const [note, setNote] = useState(props.currentCard.note);
  const [isNoting, setIsNoting] = useState(false);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      props.updateCardNote(
        props.currentColumn._id,
        props.currentCard._id,
        note
      );
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
          id={props.currentCardId}
          className="card-deatil-note-input border-none"
          type="text"
          autoFocus
          onChange={(e) => setNote(e.target.value)}
          value={note}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={() => setIsNoting(false)}
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
