import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import IDueDateProps from './interfaces/iduedateprops';

function DueDate(props: IDueDateProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    props.currentCard.dueDate as Date
  );
  const [isDueDateChange, setIsDueDateChange] = useState(false);
  const handleDateChange = (date: Date | null) => {
    setIsDueDateChange(false);
    setSelectedDate(date as Date);
    props.setDueDate(
      props.currentColumn._id,
      props.currentCard.id,
      date as Date
    );
  };

  return (
    <div className="due-date">
      {selectedDate && !isDueDateChange ? (
        <div
          onClick={() => {
            if (!props.currentCard.isCardCompleted) setIsDueDateChange(true);
          }}
          className="due-on text-orange text-bolder flex-center h-top"
        >
          <i className="far fa-calendar-alt"></i>
          <div>{`Due on ${props.convertDate(selectedDate)}`}</div>
        </div>
      ) : (
        <div className="h-top flex-center">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Due Date"
                disabled={props.currentCard.isArchived}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
      )}
    </div>
  );
}
export default DueDate;
