import React, { useState } from 'react';

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
              <div
                key={checklist.id}
                id={checklist.id}
                className="display-flex checklist-row"
              >
                <div className="checklist-circle">
                  <i className="far fa-circle"></i>
                </div>
                <input
                  value={checklist.checklist}
                  className="checklist-content border-none"
                ></input>
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
