import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';

function AddSection(props: any) {
  const [isAdding, setIsAdding] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('');

  const handleSectionTitleSubmit = () => {};

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
              <form
                className="h-top flex-center w-90per"
                onSubmit={() => handleSectionTitleSubmit()}
              >
                <input
                  className="w-100per change-project-title"
                  value={sectionTitle}
                  autoFocus
                  onBlur={() => setIsAdding(false)}
                  onChange={(e) => setSectionTitle(e.target.value)}
                ></input>
              </form>
            </div>
          ) : (
            <span>Add Section</span>
          )}
        </div>
        <div className="card-body">1111</div>
      </div>
    </>
  );
}
export default AddSection;
