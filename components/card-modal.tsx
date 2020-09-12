import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      backgroundColor: 'rgb(144,144,144,0.6)',
    },
  })
);

function CardModal(props: any) {
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backdrop,
          },
        }}
      >
        <Fade in={props.open}>
          <div className="modal-paper">
            <div className="card-detail-header">
              <button className="complete-btn">Complete</button>
            </div>
            <div className="card-detail-left">
              <h2 id="transition-modal-title">
                {props.currentCard && <div>{props.currentCard.cardTitle}</div>}
              </h2>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
export default CardModal;
