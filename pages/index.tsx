import React, { useState, useEffect } from 'react';
import ProjectName from '../components/project-name';
import Disclaimer from '../components/disclaimer';
import IndexPage from '../components/index-page';

export default function Main() {
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('omegakanbanaccept')) {
      setIsAcceptDisclaimer(true);
    }
  });

  return (
    <>
      <IndexPage />
      <ProjectName />
      {!isAcceptDisclaimer && (
        <Disclaimer setIsAcceptDisclaimer={setIsAcceptDisclaimer} />
      )}
    </>
  );
}
