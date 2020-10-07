import React, { useState, useEffect } from 'react';
import Main from '../../components/main';
import IndexPage from '../../components/index-page';
import { SnackbarProvider } from 'notistack';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import IRouterData from '../../components/interfaces/irouterdata';

export default function Index() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { _id, project } = router.query;

  useEffect(() => {
    if (_id) getRouter(_id as string, project as string);
  }, [_id]);

  const getRouter = (_id: string, project: string) => {
    fetch(`/api/get-router`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
        project,
      }),
    })
      .then((res) => res.json())
      .then((data: IRouterData) => {
        if (data.success) {
          setIsValid(true);
        } else {
          setTimeout(() => {
            router.replace('/');
          }, 500);
          setMessage('URL is not valid.');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting a route:${err.message}`
        );
      });
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <IndexPage />
      {isValid ? (
        _id && project ? (
          <Main _id={_id as string} projectName={project as string} />
        ) : (
          <div
            style={{
              backgroundColor: 'rgb(95, 188, 190)',
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </div>
        )
      ) : (
        <div
          style={{
            backgroundColor: 'rgb(95, 188, 190)',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>{message}</div>
        </div>
      )}
    </SnackbarProvider>
  );
}
