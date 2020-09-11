import React, { useState } from 'react';

function AddSection(props: any) {
  const [isAdding, setIsAdding] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('');

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSectionTitleSubmit();
    }
  };

  const handleSectionTitleSubmit = () => {
    props.createCardBox({ title: sectionTitle });
    setSectionTitle('');
    setIsAdding(false);
  };

  return (
    <>
      <div className="card-box">
        <div
          onClick={() => {
            setIsAdding(true);
          }}
          className={`add-section h-top ${
            isAdding ? 'bg-yellow' : 'bg-lightgrey'
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
                  className="w-100per change-project-title"
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
    </>
  );
}
export default AddSection;
