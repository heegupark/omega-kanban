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
          <CardHeader
            currentColumn={props.currentColumn}
            currentCard={props.currentCard}
            convertDate={props.convertDate}
            handleModalClose={props.handleModalClose}
            completeCard={props.completeCard}
          />
          <div className="card-detail-body">
            <div className="card-detail-left">
              <CardDetailHead
                currentColumn={props.currentColumn}
                currentCard={props.currentCard}
                updateCardTitle={props.updateCardTitle}
                columns={props.columns}
              />
              <div>
                <CardNote
                  currentColumn={props.currentColumn}
                  currentCard={props.currentCard}
                  updateCardNote={props.updateCardNote}
                />
                <Checklist
                  currentCard={props.currentCard}
                  currentColumn={props.currentColumn}
                  addChecklist={props.addChecklist}
                  updateChecklist={props.updateChecklist}
                  addActivity={props.addActivity}
                  completeChecklist={props.completeChecklist}
                  deleteChecklist={props.deleteChecklist}
                />
                <Activity
                  currentCard={props.currentCard}
                  currentColumn={props.currentColumn}
                  addActivity={props.addActivity}
                  updateDate={props.updateDate}
                />
              </div>
            </div>
            <div className="card-detail-right bg-grey-1">
              <DueDate
                currentCard={props.currentCard}
                currentColumn={props.currentColumn}
                setDueDate={props.setDueDate}
                convertDate={props.convertDate}
              />
              <CardInfo
                projectName={props.projectName}
                currentCard={props.currentCard}
                currentColumn={props.currentColumn}
                convertDate={props.convertDate}
              />
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
export default CardModal;
