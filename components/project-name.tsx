import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IMainProps from './interfaces/imainprops';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const randomWords = require('random-words' as string);

function ProjectName() {
  const router = useRouter();
  const [projectName, setProjectName] = React.useState<string>('');

  const handleStartBtnClick = () => {
    const _id = uuidv4();
    if (projectName.length === 0) {
      const randomProjectName = randomWords();
      // props.setProjectName(randomProjectName);
      router.replace(`/${_id}/${randomProjectName}`);
    } else {
      // props.setProjectName(projectName);
      router.replace(`/${_id}/${projectName}`);
    }
    // props.setView('board');
  };

  return (
    <div className={`home flex-center bg-head-0`}>
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
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button onClick={() => handleStartBtnClick()}>Start</Button>
      </form>
    </div>
  );
}
export default ProjectName;
