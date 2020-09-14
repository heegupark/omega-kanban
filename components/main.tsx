import React, { useState, useEffect } from 'react';
import ProjectName from './project-name';
import Disclaimer from './disclaimer';
import Board from './board';

export default function Main(props: any) {
  const [view, setView] = useState('project-name' as string);
  const [projectName, setProjectName] = React.useState('' as any);
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('omegakanbanaccept')) {
      setIsAcceptDisclaimer(true);
    }
  });

  let element = null;
  switch (view) {
    case 'project-name':
      element = (
        <ProjectName setView={setView} setProjectName={setProjectName} />
      );
      break;
    case 'board':
      element = (
        <Board
          setView={setView}
          setProjectName={setProjectName}
          projectName={projectName}
        />
      );
      break;
  }

  return (
    <>
      {element}
      {!isAcceptDisclaimer && (
        <Disclaimer setIsAcceptDisclaimer={setIsAcceptDisclaimer} />
      )}
    </>
  );
}
