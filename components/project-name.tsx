import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IMainProps from './interfaces/imainprops';
const randomWords = require('random-words' as string);

function ProjectName(props: IMainProps) {
  const [projectName, setProjectName] = React.useState<string>('');

  const handleStartBtnClick = () => {
    if (projectName.length === 0) {
      props.setProjectName(randomWords());
    } else {
      props.setProjectName(projectName);
    }
    props.setView('board');
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
