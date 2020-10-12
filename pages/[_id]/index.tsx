import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import IndexPage from '../../components/index-page';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/`);
  }, []);

  return (
    <>
      <IndexPage />
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
    </>
  );
}
