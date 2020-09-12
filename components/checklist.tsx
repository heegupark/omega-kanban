import React, { useState } from 'react';
import ChecklistItem from './checklistitem';

function Checklist(props: any) {
  const [checklist, setChecklist] = useState('');
  const [addChecklist, setAddChecklist] = useState(false);

  const handleSubmitChecklist = (e: any) => {
    if (e.key === 'Enter') {
      if (checklist.trim().length > 0) {
        props.addChecklist(
          props.currentColumn.id,
          props.currentCard.id,
          checklist
        );
      }
      setChecklist('');
    }
  };

  return (
    <>
      <div className="card-deatil-title">Checklist</div>
      <div>
        {props.currentCard &&
          props.currentCard.checklists.map((checklist: any) => {
            return (
              <div key={checklist.id}>
                <ChecklistItem
                  currentCard={props.currentCard}
                  currentColumn={props.currentColumn}
                  checklist={checklist}
                  updateChecklist={props.updateChecklist}
                  addActivity={props.addActivity}
                  columns={props.columns}
                  completeChecklist={props.completeChecklist}
                  deleteChecklist={props.deleteChecklist}
                />
              </div>
            );
          })}
      </div>
      {addChecklist && (
        <div>
          <div className="display-flex checklist-row">
            <div className="checklist-circle cursor-pointer">
              <i className="far fa-circle"></i>
            </div>
            <input
              autoFocus
              value={checklist}
              onBlur={(e: any) => {
                if (e.target.value.trim().length === 0) setAddChecklist(false);
              }}
              onChange={(e) => setChecklist(e.target.value)}
              onKeyDown={(e) => handleSubmitChecklist(e)}
              className="checklist-content border-none"
            ></input>
          </div>
        </div>
      )}
      <div
        onClick={() => setAddChecklist(true)}
        className="card-deatil-checklist text-skyblue cursor-pointer"
      >
        + Add Checklist Item
      </div>
    </>
  );
}
export default Checklist;
