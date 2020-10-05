import React, { useState, useEffect } from 'react';
import Disclaimer from './disclaimer';
import Board from './board';

interface iProjectProps {
  _id: string;
  projectName: string;
}

export default function Main(props: iProjectProps) {
  const [projectName, setProjectName] = React.useState(props.projectName);
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('omegakanbanaccept')) {
      setIsAcceptDisclaimer(true);
    }
  });

  return (
    <>
      <Board setProjectName={setProjectName} projectName={projectName} />
      {!isAcceptDisclaimer && (
        <Disclaimer setIsAcceptDisclaimer={setIsAcceptDisclaimer} />
      )}
    </>
  );
}
