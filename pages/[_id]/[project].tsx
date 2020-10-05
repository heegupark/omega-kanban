import React from 'react';
import Main from '../../components/main';
import IndexPage from '../../components/index-page';
import { SnackbarProvider } from 'notistack';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Index() {
  const router = useRouter();
  const { _id, project } = router.query;
  return (
    <SnackbarProvider maxSnack={3}>
      <IndexPage />
      {_id && project ? (
        <Main _id={_id as string} projectName={project as string} />
      ) : (
        <div
          style={{
            backgroundColor: 'white',
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
      )}
    </SnackbarProvider>
  );
}
