import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
const randomstring = require('randomstring' as any);
const randomWords = require('random-words' as any);

export default function Main(props: any) {
  const [projectName, setProjectName] = React.useState('' as any);
  const router = useRouter();

  const handleStartBtnClick = () => {
    let project = projectName;
    if (projectName.length === 0) {
      project = randomWords();
    }
    router.push(`/board/${randomstring.generate(10)}/${project}`);
  };

  return (
    <div className="home bg-skyblue">
      <form className="project-name" noValidate autoComplete="off">
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
