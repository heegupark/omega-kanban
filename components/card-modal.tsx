import React, { useState } from 'react';
import Checklist from './checklist';
import CardNote from './card-note';
import CardDetailHead from './card-detail-head';
import Activity from './activity';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

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
          <div className="card-detail-header">
            <button className="complete-btn cursor-pointer border-none bg-head-1">
              Complete
            </button>
            <div
              onClick={() => props.handleModalClose()}
              className="card-detail-close float-right cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
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
                />
              </div>
            </div>
            <div className="card-detail-right bg-grey-1">
              <div className="due-date">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      id="date-picker-inline"
                      label="Due Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <div className="card-detail-project-info">
                <div className="my-5px">{props.projectName}</div>
                <div className="font-12px my-5px">
                  {props.currentColumn.title}
                </div>
                <div className="my-10px display-flex">
                  <div className="circle-icon">
                    <i className="fas fa-plus-circle"></i>
                  </div>
                  <div>
                    <div className="my-5px">Created</div>
                    <div className="font-12px my-5px">
                      {props.createdAt || 'undefined'}
                    </div>
                  </div>
                </div>
                <div className="my-10px display-flex">
                  <div className="circle-icon">
                    <i className="fas fa-pen"></i>
                  </div>
                  <div>
                    <div className="my-5px">Updated</div>
                    <div className="font-12px my-5px">
                      {props.updatedAt || 'undefined'}
                    </div>
                  </div>
                </div>
                <div className="my-10px display-flex">
                  <div className="circle-icon">
                    <i className="fas fa-link"></i>
                  </div>
                  <div>
                    <div className="my-5px">Task ID</div>
                    <div className="font-12px my-5px">
                      {props.currentCard.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
export default CardModal;
