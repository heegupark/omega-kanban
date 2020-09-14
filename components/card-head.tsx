import React, { useState } from 'react';
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

function CardHead(props: any) {
  const [isCardBoxTileChanging, setIsCardBoxTileChanging] = useState(false);
  const [cardBoxTitle, setCardBoxTitle] = useState(props.column.title);
  const [showAngle, setShowAngle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCardBoxTitleBlur = () => {};

  const handleKeyDownForCardBoxTitle = (event: any) => {
    if (event.key === 'Enter') {
      handleCardBoxTitleSubmit();
    }
  };

  const handleCardBoxTitleSubmit = () => {
    if (cardBoxTitle.trim().length > 0) {
      props.updateSectionTitle(props.column.id, cardBoxTitle);
    }
    setIsCardBoxTileChanging(false);
  };

  const handleDeleteColClick = () => {
    props.deleteColumn(props.column.id);
    handleClose();
  };

  let iconElement = null;
  switch (true) {
    case props.column.title.toLowerCase().includes('plan'):
      iconElement = <i className="far fa-lightbulb"></i>;
      break;
    case props.column.title.toLowerCase().includes('progress'):
      iconElement = <i className="fas fa-spinner"></i>;
      break;
    case props.column.title.toLowerCase().includes('done'):
      iconElement = <i className="far fa-check-circle"></i>;
      break;
    case props.column.title.toLowerCase().includes('complete'):
      iconElement = <i className="far fa-check-circle"></i>;
      break;
    case props.column.title.toLowerCase().includes('task'):
      iconElement = <i className="fas fa-tasks"></i>;
      break;
    case props.column.title.toLowerCase().includes('step'):
      iconElement = <i className="fas fa-walking"></i>;
      break;
    case props.column.title.toLowerCase().includes('archive'):
      iconElement = <i className="fas fa-archive"></i>;
      break;
    default:
      iconElement = <i className="fas fa-bolt"></i>;
  }
  return (
    <>
      {props.column.id === 'archive' ? (
        <div className={`subtitle-box h-top bg-grey-2`}>
          <div className="icon-box">{iconElement}</div>
          <div className="section-title w-60per h-top">
            <div className="p-10px">{props.column.title}</div>
          </div>
          <div className="card-head-angle"></div>
          <div className="cards-num flex-center">
            {props.column.cards.length}
          </div>
        </div>
      ) : (
        <div
          className={`subtitle-box h-top bg-head-${
            props.column.colorIndex % 7
          } text-white`}
          onMouseOver={() => setShowAngle(true)}
          onMouseLeave={() => setShowAngle(false)}
        >
          <div {...props.dragHandleProps} className="icon-box">
            {iconElement}
          </div>
          <div
            onClick={() => setIsCardBoxTileChanging(true)}
            className="section-title w-60per h-top cursor-text"
          >
            {isCardBoxTileChanging ? (
              <div
                className="h-top flex-center w-90per"
                onBlur={() => handleCardBoxTitleBlur()}
              >
                <input
                  className="w-100per change-section-title"
                  value={cardBoxTitle}
                  autoFocus
                  onKeyDown={(event) => handleKeyDownForCardBoxTitle(event)}
                  onBlur={() => setIsCardBoxTileChanging(false)}
                  onChange={(e) => {
                    if (e.target.value.trim().length < 1) {
                      setCardBoxTitle(e.target.value.trim());
                    } else {
                      setCardBoxTitle(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <>
                <div className="p-10px">{props.column.title}</div>
              </>
            )}
          </div>
          <div className="card-head-angle cursor-pointer">
            {!isCardBoxTileChanging && showAngle && (
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
          <div className="cards-num flex-center">
            {props.column.cards.length}
          </div>
        </div>
      )}
    </>
  );
}
export default CardHead;
