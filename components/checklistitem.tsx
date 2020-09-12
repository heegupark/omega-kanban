import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid rgb(239, 243, 244)',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
function ChecklistItem(props: any) {
  const [checklist, setChecklist] = useState(props.checklist.checklist);
  const [showAngle, setShowAngle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChecklistSubmit = (e: any) => {
    if (e.key === 'Enter') {
      props.updateChecklist(
        props.currentColumn.id,
        props.currentCard.id,
        props.checklist.id,
        checklist
      );
    }
  };
  const handleCompleteChecklist = () => {
    props.completeChecklist(
      props.currentColumn.id,
      props.currentCard.id,
      props.checklist.id,
      !props.checklist.isChecked
    );
  };

  const handleDeleteColClick = () => {
    props.deleteChecklist(
      props.currentColumn.id,
      props.currentCard.id,
      props.checklist.id
    );
  };

  return (
    <div
      id={props.checklist.id}
      onMouseOver={() => setShowAngle(true)}
      onMouseLeave={() => setShowAngle(false)}
      className="display-flex checklist-row"
    >
      <div
        className="checklist-circle cursor-pointer"
        onClick={() => handleCompleteChecklist()}
      >
        {props.checklist.isChecked ? (
          <Zoom in={true}>
            <i className="far fa-check-circle"></i>
          </Zoom>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </div>
      {props.checklist.isChecked ? (
        <div className="checklist-content">
          <s>{checklist}</s>
        </div>
      ) : (
        <input
          value={checklist}
          onChange={(e) => setChecklist(e.target.value)}
          onKeyDown={(e) => handleChecklistSubmit(e)}
          className="checklist-content border-none"
        ></input>
      )}
      <div className="card-head-angle cursor-pointer">
        {checklist && showAngle && (
          <>
            <i onClick={handleClick} className="fas fa-angle-down"></i>
          </>
        )}
        <StyledMenu
          id="delete-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleDeleteColClick()}>
            <ListItemText primary="Delete" />
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
}
export default ChecklistItem;
