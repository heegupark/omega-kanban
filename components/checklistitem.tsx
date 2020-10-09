import React, { useState, KeyboardEvent } from 'react';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IChecklistProps from './interfaces/ichecklistprops';
import IChecklist from './interfaces/ichecklist';
import ICard from './interfaces/icard';
import IColumnItem from './interfaces/icolumnitem';

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

interface IChecklistItemProps extends IChecklistProps {
  checklist: IChecklist;
  currentColumn: IColumnItem;
  currentCard: ICard;
}

function ChecklistItem(props: IChecklistItemProps) {
  const [checklist, setChecklist] = useState<string>(props.checklist.checklist);
  const [showAngle, setShowAngle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChecklistSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.updateChecklist(
        props.currentColumn._id,
        props.currentCard._id,
        props.checklist._id,
        checklist
      );
    }
  };
  const handleCompleteChecklist = () => {
    props.completeChecklist(
      props.currentColumn._id,
      props.currentCard._id,
      props.checklist._id,
      !props.checklist.isChecked
    );
  };

  const handleDeleteColClick = () => {
    props.deleteChecklist(
      props.currentColumn._id,
      props.currentCard._id,
      props.checklist._id
    );
  };

  return (
    <>
      {props.currentCard.isArchived ? (
        <div className="display-flex checklist-row-no-hover">
          <div className="checklist-circle">
            {props.checklist.isChecked ? (
              <i className="far fa-check-circle"></i>
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
              disabled={true}
              className="checklist-content border-none"
            ></input>
          )}
        </div>
      ) : (
        <div
          // id={props.checklist.id}
          onMouseOver={() => setShowAngle(true)}
          onMouseLeave={() => setShowAngle(false)}
          className="display-flex checklist-row"
        >
          <div
            className="checklist-circle cursor-pointer"
            onClick={() => handleCompleteChecklist()}
          >
            {props.checklist && props.checklist.isChecked ? (
              <Zoom in={true}>
                <i className="far fa-check-circle"></i>
              </Zoom>
            ) : (
              <i className="far fa-circle"></i>
            )}
          </div>
          {props.checklist && props.checklist.isChecked ? (
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
      )}
    </>
  );
}
export default ChecklistItem;
