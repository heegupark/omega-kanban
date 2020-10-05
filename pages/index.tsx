import React, { useState, useEffect } from 'react';
import ProjectName from '../components/project-name';
import Disclaimer from '../components/disclaimer';

export default function Main() {
  const [projectName, setProjectName] = React.useState('' as any);
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('omegakanbanaccept')) {
      setIsAcceptDisclaimer(true);
    }
  });

  return (
    <>
      <ProjectName
      // setView={setView}
      // setProjectName={setProjectName}
      // projectName={projectName}
      />
      {!isAcceptDisclaimer && (
        <Disclaimer setIsAcceptDisclaimer={setIsAcceptDisclaimer} />
      )}
    </>
  );
}
