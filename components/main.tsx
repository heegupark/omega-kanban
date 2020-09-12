import React, { useState } from 'react';
import ProjectName from './project-name';
import Board from './board';

export default function Main(props: any) {
  const [view, setView] = useState('project-name' as string);
  const [projectName, setProjectName] = React.useState('' as any);

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

  return <>{element}</>;
}
