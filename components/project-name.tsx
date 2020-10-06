import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IRouterData from './interfaces/irouterdata';
import { useRouter } from 'next/router';

const randomWords = require('random-words' as string);

function ProjectName() {
  const router = useRouter();
  const [projectName, setProjectName] = useState<string>('');
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const addRouter = (project: String) => {
    fetch(`/api/add-router`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project,
      }),
    })
      .then((res) => res.json())
      .then((data: IRouterData) => {
        if (data.success) {
          setIsBtnClick(false);
          router.replace(`/${data.data._id}/${data.data.project}`);
        } else {
          setTimeout(() => {
            setError(false);
            setMessage('');
          }, 500);
          setError(true);
          setMessage('failed to create a project');
        }
        setIsBtnClick(false);
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while adding a route:${err.message}`
        );
      });
  };

  const handleStartBtnClick = () => {
    setIsBtnClick(true);
    if (projectName.length === 0) {
      addRouter(randomWords());
    } else {
      addRouter(projectName);
    }
  };

  return (
    <div className="home flex-center bg-head-0 flex-column">
      <form
        className="project-name"
        noValidate
        autoComplete="off"
        onSubmit={() => handleStartBtnClick()}
      >
        <TextField
          className="project-name-text"
          id="standard-basic"
          label="project name"
          error={error}
          disabled={isBtnClick}
          value={projectName}
          helperText={message}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button disabled={isBtnClick} onClick={() => handleStartBtnClick()}>
          Start
        </Button>
      </form>
    </div>
  );
}
export default ProjectName;
