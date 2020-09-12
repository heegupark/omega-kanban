import React, { useState } from 'react';

function ChecklistItem(props: any) {
  const [checklist, setChecklist] = useState(props.checklist.checklist);
  const handleChecklistSubmit = (e: any) => {
    if (e.key === 'Enter') {
      props.updateChecklist(
        props.currentColumn.id,
        props.currentCard.id,
        props.checklist.id,
        checklist
      );
    }
  };
  return (
    <div id={props.checklist.id} className="display-flex checklist-row">
      <div className="checklist-circle">
        <i className="far fa-circle"></i>
      </div>
      <input
        value={checklist}
        onChange={(e) => setChecklist(e.target.value)}
        onKeyDown={(e) => handleChecklistSubmit(e)}
        className="checklist-content border-none"
      ></input>
    </div>
  );
}
export default ChecklistItem;
