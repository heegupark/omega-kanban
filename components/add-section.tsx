import React, { useState, KeyboardEvent } from 'react';
import IAddSectionProps from './interfaces/iaddsectionprops';

function AddSection(props: IAddSectionProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('');

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSectionTitleSubmit();
    }
  };

  const handleSectionTitleSubmit = () => {
    props.addSection(sectionTitle, undefined);
    setSectionTitle('');
    setIsAdding(false);
  };

  return (
    <div className="column">
      <div className={`card-box bg-grey-${(props.colorIndex - 1) % 2}`}>
        <div
          onClick={() => {
            setIsAdding(true);
          }}
          className={`add-section h-top ${
            isAdding
              ? `bg-head-${(props.colorIndex + 1) % 7}`
              : `bg-grey-${props.colorIndex % 2}`
          } text-skyblue cursor-pointer`}
        >
          <div className="icon-box">
            {isAdding ? (
              <i className="fas fa-bolt text-white"></i>
            ) : (
              <i className="fas fa-plus"></i>
            )}
          </div>
          {isAdding ? (
            <div className="add-section-title-box">
              <div className="h-top flex-center w-90per">
                <input
                  className="w-100per change-section-title"
                  value={sectionTitle}
                  autoFocus
                  onBlur={() => setIsAdding(false)}
                  onChange={(e) => setSectionTitle(e.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
                ></input>
              </div>
            </div>
          ) : (
            <span>Add Section</span>
          )}
        </div>
        <div className="card-body flex-center flex-column">
          <div>
            <img
              className="add-section-img"
              src="../../static/images/omegathrone_profile.jpg"
              alt="omegathrone"
            />
          </div>
          {isAdding ? (
            <div>What is your checklist?</div>
          ) : (
            <div>What is your next step?</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AddSection;
