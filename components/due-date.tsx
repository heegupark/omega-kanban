import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function DueDate(props: any) {
  const [selectedDate, setSelectedDate] = useState(props.currentCard.dueDate);
  const [isDueDateChange, setIsDueDateChange] = useState(false);
  const handleDateChange = (date: Date | null) => {
    setIsDueDateChange(false);
    setSelectedDate(date);
    props.setDueDate(props.currentColumn.id, props.currentCard.id, date);
  };

  const convertDate = (date: Date) => {
    const month = date.toString().split(' ')[1];
    const day = date.toString().split(' ')[2];
    const year = date.toString().split(' ')[3];
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="due-date">
      {selectedDate && !isDueDateChange ? (
        <div
          onClick={() => setIsDueDateChange(true)}
          className="due-on text-orange text-bolder flex-center h-top"
        >
          <i className="far fa-calendar-alt"></i>
          <div>{`Due on ${convertDate(selectedDate)}`}</div>
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
