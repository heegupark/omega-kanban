import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgb(222, 222, 222)',
    border: '1px solid rgb(255, 192, 47)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 2),
    textAlign: 'center',
    width: '350px',
    borderRadius: '5px',
    fontSize: '12px',
  },
  title: {
    fontSize: '22px',
    color: 'rgb(66, 54, 48)',
  },
  button: {
    height: '30px',
    marginTop: '10px',
    marginBottom: '5px',
  },
  paragraph: {
    fontSize: '12px',
    color: 'rgb(66, 54, 48)',
    marginBottom: '5px',
  },
  support: {
    fontSize: '12px',
    color: 'rgb(66, 54, 48)',
    marginTop: '5px',
  },
  email: {
    fontSize: '12px',
    color: 'rgb(66, 54, 48)',
  },
}));

function Disclaimer(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptClick = () => {
    localStorage.setItem('omegakanbanaccept', true as any);
    props.setIsAcceptDisclaimer(true);
    handleClose();
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p className={classes.title}>Welcome to Omega Kanban</p>
            <div className={classes.paragraph}>
              This app is created strictly for demonstration purposes. By
              clicking the button below, you accept that Omega Kanban do not
              guarantee storing your messages.
            </div>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              onClick={handleAcceptClick}
            >
              Accept
            </Button>
            <p className={classes.paragraph}>
              I built this app using React, React Hooks, Next.js and Typescript
              to provide Kanban functions.
            </p>
            <div className={classes.support}>
              {'If you have any questions, please email to '}
              <a
                className={classes.email}
                href="mailto:omegathrone@omegathrone.com"
              >
                omegathrone@omegathrone.com
              </a>
              .
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default Disclaimer;
