import React, { useState } from 'react';

function CardDetailHead(props: any) {
  const [cardDetailTitle, setCardDetailTitle] = useState(
    props.currentCard.cardTitle
  );

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      props.updateCardTitle(
        props.currentColumn.id,
        props.currentCard.id,
        cardDetailTitle
      );
    }
  };
  return (
    <div id="transition-modal-title">
      <input
        id={props.currentCard.id}
        className="card-deatil-title border-none"
        type="text"
        onChange={(e) => setCardDetailTitle(e.target.value)}
        value={cardDetailTitle}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
}
export default CardDetailHead;
