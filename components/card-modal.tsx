import React, { useState, useEffect } from 'react';
import Checklist from './checklist';
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
  const [cardDetailTitle, setCardDetailTitle] = useState(
    props.currentCard.cardTitle
  );
  const [note, setNote] = useState('');
  const [isNoting, setIsNoting] = useState(false);
  const [checklist, setChecklist] = useState('');
  const [addChecklist, setAddChecklist] = useState(false);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log(event.target);
    }
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmitChecklist = (e: any) => {
    if (e.key === 'Enter') {
      if (checklist.trim().length > 0) {
        props.addChecklist(
          props.currentColumn.id,
          props.currentCard.id,
          checklist
        );
      }
      setChecklist('');
    }
  };

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
              <button className="complete-btn cursor-pointer">Complete</button>
              <div
                onClick={() => props.handleModalClose()}
                className="card-detail-close float-right cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="card-detail-body">
              <div className="card-detail-left">
                <div id="transition-modal-title">
                  <input
                    id={props.currentCard.id}
                    className="card-deatil-title border-none"
                    type="text"
                    onChange={(e) => setCardDetailTitle(e.target.value)}
                    value={cardDetailTitle}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                </div>
                <div>
                  <div className="card-deatil-note-box">
                    {isNoting ? (
                      <input
                        id={props.currentCard.id}
                        className="card-deatil-note-input border-none"
                        type="text"
                        autoFocus
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                        onKeyDown={(e) => handleKeyDown(e)}
                        onBlur={() => setIsNoting(false)}
                      />
                    ) : note.length < 1 ? (
                      <div
                        onClick={() => setIsNoting(true)}
                        className="card-detail-note cursor-text"
                      >
                        This task has no notes.
                      </div>
                    ) : (
                      <div
                        onClick={() => setIsNoting(true)}
                        className="card-detail-note cursor-text"
                      >
                        {note}
                      </div>
                    )}
                  </div>
                  <Checklist
                    currentCard={props.currentCard}
                    currentColumn={props.currentColumn}
                    addChecklist={props.addChecklist}
                  />
                  <div className="card-deatil-title">Activity</div>
                  <textarea
                    className="card-detail-activity"
                    placeholder="Add Comment"
                  ></textarea>
                  <div>
                    <button className="complete-btn cursor-pointer float-right">
                      Say it
                    </button>
                  </div>
                  <div className="actibity-log"></div>
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
    </>
  );
}
export default CardModal;
