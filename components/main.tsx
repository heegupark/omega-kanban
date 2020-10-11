import React, { useState, useEffect } from 'react';
import Disclaimer from './disclaimer';
import Board from './board';
import { VariantType, useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

interface iProjectProps {
  _id: string;
  projectName: string;
}

export default function Main(props: iProjectProps) {
  const [projectName, setProjectName] = React.useState(props.projectName);
  const [isAcceptDisclaimer, setIsAcceptDisclaimer] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('omegakanbanaccept')) {
      setIsAcceptDisclaimer(true);
    }
  });

  const handleSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  const changeProjectName = (project: string) => {
    handleSnackbar(`Trying to update a project name to ${project}`, 'info');
    fetch(`/api/update-project-name`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props._id,
        project,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean }) => {
        if (data.success) {
          handleSnackbar(
            `Successfully changed. Will be redirecting...`,
            'warning'
          );
          router.replace(`/${props._id}/${project}`);
        } else {
          handleSnackbar(`Failed to update a project name`, 'error');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while updating a project name:${err.message}`
        );
        handleSnackbar(`Failed to update a project name`, 'error');
      });
  };

  return (
    <>
      <Board
        _id={props._id}
        changeProjectName={changeProjectName}
        projectName={projectName}
      />
      {!isAcceptDisclaimer && (
        <Disclaimer setIsAcceptDisclaimer={setIsAcceptDisclaimer} />
      )}
    </>
  );
}
