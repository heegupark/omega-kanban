import React, { useState } from 'react';
import Checklist from './checklist';
import CardHeader from './card-header';
import CardNote from './card-note';
import DueDate from './due-date';
import CardInfo from './card-info';
import CardDetailHead from './card-detail-head';
import Activity from './activity';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ICardModalProps from './interfaces/icardmodalprops';

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

function CardModal(props: ICardModalProps) {
  const classes = useStyles();
  const [category, setCategory] = useState('delete');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCategory('delete');
    setOpen(false);
  };

  const handleDeleteBtn = () => {
    props.deleteCard(props.currentColumn._id, props.currentCard._id);
    handleClose();
    props.handleModalClose();
  };

  const handleArchiveBtn = () => {
    const newCard = {
      _id: props.currentCard._id,
      columnId: 'archive',
      cardTitle: undefined,
      note: undefined,
      isCardCompleted: undefined,
      isArchived: true,
      dueDate: null,
    };
    props.archiveCard(props.currentColumn._id, props.currentCard._id);
    handleClose();
    props.handleModalClose();
  };

  let modalElement = null;
  switch (category) {
    case 'archive':
      modalElement = (
        <div className="modal-delete">
          <div className="delete-btn-desc text-center">
            You cannot redo this.
          </div>
          <div className="delete-btn-desc text-center">
            Do you want to archive this card?
          </div>
          <div className="delete-btn-box">
            <Button
              onClick={() => handleArchiveBtn()}
              size="small"
              variant="outlined"
              color="primary"
            >
              Archive
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        </div>
      );
      break;
    default:
      modalElement = (
        <div className="modal-delete">
          <div className="delete-btn-desc">
            Do you want to delete this card?
          </div>
          <div className="delete-btn-box">
            <Button
              onClick={() => handleDeleteBtn()}
              size="small"
              variant="outlined"
              color="secondary"
            >
              Delete
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        </div>
      );
      break;
  }

  return (
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
        <>
          <div className="modal-paper">
            <CardHeader
              {...props}
              setCategory={setCategory}
              handleOpen={handleOpen}
            />
            <div className="card-detail-body">
              <div className="card-detail-left">
                <CardDetailHead {...props} />
                <div>
                  <CardNote {...props} />
                  <Checklist {...props} />
                  <Activity {...props} />
                </div>
              </div>
              <div className="card-detail-right bg-grey-1">
                <DueDate {...props} />
                <CardInfo {...props} />
                {!props.currentCard?.isArchived && (
                  <div className="flex-center">
                    <button
                      onClick={() => handleOpen()}
                      className="delete-card-btn border-none text-red cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>{modalElement}</Fade>
          </Modal>
        </>
      </Fade>
    </Modal>
  );
}
export default CardModal;
