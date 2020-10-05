import React, { useState } from 'react';
import { useRouter } from 'next/router';
import IMainProps from './interfaces/imainprops';

export default function Top(props: IMainProps) {
  const [isProjectNameChanging, setIsProjectNameChanging] = useState(false);
  const [projectName, setProjectName] = useState(props.projectName);
  const router = useRouter();

  const handleKeyDownForProjectName = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.setProjectName(projectName);
      setIsProjectNameChanging(false);
    }
  };
  return (
    <>
      <div className="top h-top">
        <div
          onClick={() => router.replace(`/`)}
          className="top-home cursor-pointer"
        >
          <i className="fas fa-home"></i>
        </div>
        <div
          onClick={(e) => setIsProjectNameChanging(true)}
          className="top-title cursor-text"
        >
          {isProjectNameChanging ? (
            <input
              className="w-100per change-project-title"
              value={projectName}
              autoFocus
              onKeyDown={(event) => handleKeyDownForProjectName(event)}
              onBlur={() => setIsProjectNameChanging(false)}
              onChange={(e) => {
                if (e.target.value.trim().length < 1) {
                  setProjectName(e.target.value.trim());
                } else {
                  setProjectName(e.target.value);
                }
              }}
            ></input>
          ) : (
            <div>{props.projectName}</div>
          )}
        </div>
      </div>
    </>
  );
}
