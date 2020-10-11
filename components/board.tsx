import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import Top from './top';
import Column from './column';
import AddColumn from './add-column';
import Archive from './archive';
import CardModal from './card-modal';
import { VariantType, useSnackbar } from 'notistack';
import IMainProps from './interfaces/imainprops';
import IColumns from './interfaces/icolumns';
import ICard from './interfaces/icard';
import IColumnItem from './interfaces/icolumnitem';
import IChecklist from './interfaces/ichecklist';
import IColumnData from './interfaces/icolumndata';
import { IActivity } from '../middleware/models/activity';
import { IColumn } from '../middleware/models/column';

function Board(props: IMainProps) {
  const { enqueueSnackbar } = useSnackbar();
  // const [state, setState] = useState<IColumns>({
  //   columns: {
  //     'column-0': {
  //       id: 'column-0',
  //       title: 'Plan',
  //       cards: [
  //         {
  //           id: uuidv4(),
  //           cardTitle: 'Create HTML skeleton',
  //           note: '',
  //           isCardCompleted: false,
  //           isArchived: false,
  //           checklists: [],
  //           activities: [],
  //           dueDate: new Date(2020, 9, 11),
  //           createdAt: new Date(2020, 8, 11),
  //           updatedAt: new Date(2020, 8, 11),
  //         },
  //       ],
  //       colorIndex: 0,
  //       createdAt: new Date(2020, 8, 1),
  //       updatedAt: new Date(2020, 8, 11),
  //     },
  //     'column-1': {
  //       id: 'column-1',
  //       title: 'Progress',
  //       cards: [],
  //       colorIndex: 1,
  //       createdAt: new Date(2020, 8, 2),
  //       updatedAt: new Date(2020, 8, 2),
  //     },
  //     'column-2': {
  //       id: 'column-2',
  //       title: 'Complete',
  //       cards: [],
  //       colorIndex: 2,
  //       createdAt: new Date(2020, 8, 3),
  //       updatedAt: new Date(2020, 8, 3),
  //     },
  //   },
  //   columnOrder: ['column-0', 'column-1', 'column-2'],
  //   archive: {
  //     id: 'archive',
  //     title: 'Archive',
  //     cards: [],
  //     colorIndex: 0,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });

  const [state, setState] = useState<IColumns>({
    columns: {},
    columnOrder: [],
    archive: {
      _id: 'archive',
      title: 'Archive',
      cards: [],
      colorIndex: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const [colorIndex, setColorIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<ICard>({} as ICard);
  const [currentColumn, setCurrentColumn] = useState<IColumnItem>(
    {} as IColumnItem
  );
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
  const [archiveColumnId, setArchiveColumnId] = useState('');
  // useEffect(() => {
  //   setColorIndex(state.columnOrder.length - 1);
  // }, []);

  useEffect(() => {
    getColumns(props._id);
  }, []);

  const getColumns = (_id: String) => {
    fetch(`/api/get-columns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
      }),
    })
      .then((res) => res.json())
      .then(
        (data: {
          success: boolean;
          columns: [IColumnItem];
          archive: [IColumnItem];
        }) => {
          if (data.success) {
            console.log(data.columns);
            console.log(data.archive);
            state.columnOrder = [];
            // state.archive = {
            //   _id: 'archive',
            //   title: 'Archive',
            //   cards: [],
            //   colorIndex: 0,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // };
            state.archive = data.archive[0];
            setArchiveColumnId(data.archive[0]._id);
            console.log(state.archive._id);
            data.columns.map((column: IColumnItem) => {
              state.columns[column._id] = column;
              state.columnOrder.push(column._id);
              setState({
                ...state,
              });
            });
            setColorIndex(data.columns.length - 1);
            setIsLoadingCompleted(true);
          } else {
          }
        }
      )
      .catch((err) => {
        console.error(
          `Something wrong happened while getting a route:${err.message}`
        );
      });
  };

  const addColumn = (sectionTitle: string, card: ICard | undefined) => {
    // const newSection: ISection = {
    //   _id: uuidv4(),
    //   title: sectionTitle,
    //   cards: [],
    //   colorIndex: colorIndex + 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // };
    // if (card) {
    //   newSection.cards.push(card);
    // }

    fetch('/api/add-column', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId: props._id,
        title: sectionTitle,
        colorIndex: colorIndex + 1,
      }),
    })
      .then((res) => res.json())
      .then((data: IColumnData) => {
        if (data.success) {
          state.columns[data.data._id] = { ...data.data, cards: [] };
          state.columnOrder.push(data.data._id);
          setColorIndex(colorIndex + 1);
          setState({
            ...state,
          });
          handleSnackbar(`'${sectionTitle}' is created`, 'success');
        } else {
          handleSnackbar(`Failed to add a column`, 'error');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while adding a column:${err.message}`
        );
      });
  };

  const updateCard = (
    columnId: string,
    card: {
      _id: string;
      columnId: string | undefined;
      cardTitle: string | undefined;
      note: string | undefined;
      isCardCompleted: boolean | undefined;
      isArchived: boolean | undefined;
      dueDate: Date | null;
    }
  ) => {
    fetch(`/api/update-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: ICard }) => {
        if (data.success) {
          state.columns[columnId].cards.map((item: ICard, index: number) => {
            if (item._id === card._id) {
              if (card.cardTitle) {
                item.cardTitle = card.cardTitle;
                addActivity(
                  columnId,
                  card._id,
                  `Card title is changed to ${card.cardTitle}`
                );
              }
              if (card.note) {
                item.note = card.note;
                addActivity(columnId, card._id, `Card note is changed`);
              }
              if (card.isCardCompleted) {
                item.isCardCompleted = card.isCardCompleted;
                addActivity(columnId, card._id, `Card is completed`);
              }
              if (card.isArchived) {
                let tempCard: ICard = {} as ICard;
                console.log(tempCard);
                state.columns[columnId].cards.map(
                  (card: ICard, index: number) => {
                    if (item._id === card._id) {
                      item.isArchived = true;
                      item.columnId = 'archive';
                      tempCard = card;
                      state.columns[columnId].cards.splice(index, 1);
                    }
                  }
                );
                updateDate(columnId, card._id);
                state.archive.cards.push(tempCard);
                addActivity('archive', card._id, `Card is archived`);
              }
              if (card.dueDate) {
                item.dueDate = card.dueDate;
                addActivity(
                  columnId,
                  card._id,
                  `A due date is set to ${convertDate(card.dueDate)}`
                );
              }
            }
          });
          updateDate(columnId, card._id);
          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while updating a card',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while updating a card:${err.message}`
        );
      });
  };

  const addCard = (columnId: string, cardTitle: string) => {
    fetch(`/api/add-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        columnId,
        cardTitle,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: ICard }) => {
        if (data.success) {
          state.columns[columnId].cards.push(data.data);
          addActivity(
            columnId,
            data.data._id,
            `A card with title '${cardTitle}' is created in '${state.columns[columnId].title}'`
          );
          updateDate(columnId, '');
          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while adding a card',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while adding a card:${err.message}`
        );
      });
  };

  const updateColumnTitle = (_id: string, title: string) => {
    fetch(`/api/update-column-title`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
        title,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean }) => {
        if (data.success) {
          state.columns[_id].title = title;
          state.columns[_id].updatedAt = new Date();
          setState({
            ...state,
          });
          handleSnackbar(`Column title is updated`, 'info');
        } else {
          handleSnackbar(`Failed to update a column title`, 'error');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting a route:${err.message}`
        );
        handleSnackbar(`Failed to update a column title`, 'error');
      });
  };

  const deleteColumn = (_id: string) => {
    const title = state.columns[_id].title;
    fetch(`/api/delete-column`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; message: string }) => {
        if (data.success) {
          delete state.columns[_id];
          state.columnOrder.splice(state.columnOrder.indexOf(_id), 1);
          setState({
            ...state,
          });
          handleSnackbar(`'${title}' is deleted`, 'error');
        } else {
          handleSnackbar(`Failed to delete a column`, 'warning');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while deleting a column:${err.message}`
        );
      });
  };

  const deleteCard = (columnId: string, cardId: string) => {
    fetch(`/api/delete-card`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: cardId,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; message: string }) => {
        if (data.success) {
          state.columns[columnId].cards.map((card: ICard, index: number) => {
            if (card._id === cardId) {
              state.columns[columnId].cards.splice(index, 1);
            }
          });
          updateDate(columnId, cardId);
          handleSnackbar('A card is deleted', 'error');
          setState({
            ...state,
          });
        } else {
          handleSnackbar(`Failed to delete a card`, 'warning');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while deleting a card:${err.message}`
        );
      });
  };

  const archiveCard = (columnId: string, cardId: string) => {
    fetch(`/api/archive-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: cardId, projectId: props._id }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: ICard }) => {
        if (data.success) {
          let tempCard: ICard = {} as ICard;
          state.columns[columnId].cards.map((card: ICard, index: number) => {
            if (card._id === cardId) {
              card.isArchived = true;
              tempCard = card;
              state.columns[columnId].cards.splice(index, 1);
            }
          });
          updateDate(columnId, cardId);
          state.archive.cards.push(tempCard);
          addActivity(archiveColumnId, cardId, `Card is archived`);
          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while archiving a card',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while archiving a card:${err.message}`
        );
      });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.type === 'column') {
      const columnOrder: Array<string> = reorderColumn(
        state.columnOrder,
        result.source.index,
        result.destination.index
      );
      handleSnackbar(
        `'${
          state.columns[state.columnOrder[result.source.index]].title
        }' and '${
          state.columns[state.columnOrder[result.destination.index]].title
        }' are reordered`,
        'success'
      );
      setState({
        ...state,
        columnOrder,
      });
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const cards = reorderCards(
        column.cards,
        result.source.index,
        result.destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [column._id]: {
            ...column,
            cards,
          },
        },
      };
      setState(newState);
      handleSnackbar(`A card is reordered in'${column.title}'`, 'success');
      return;
    }

    const sourceColumn = state.columns[result.source.droppableId];
    const destinationColumn = state.columns[result.destination.droppableId];
    const card = sourceColumn.cards[result.source.index];

    const newSourceColumn = {
      ...sourceColumn,
      cards: [...sourceColumn.cards],
    };
    newSourceColumn.cards.splice(result.source.index, 1);

    const newDestinationColumn = {
      ...destinationColumn,
      cards: [...destinationColumn.cards],
    };
    newDestinationColumn.cards.splice(result.destination.index, 0, card);

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceColumn._id]: newSourceColumn,
        [newDestinationColumn._id]: newDestinationColumn,
      },
    };
    handleSnackbar(
      `A card is moved from '${newSourceColumn.title}' to '${newDestinationColumn.title}'`,
      'success'
    );
    setState(newState);
  };

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    display: 'flex',
    flexDirection: 'row',
    ...draggableStyle,
  });

  const reorderCards = (
    list: Array<ICard>,
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const reorderColumn = (
    list: Array<string>,
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const [open, setOpen] = React.useState(false);
  const setCardForOpen = (columnId: string, cardId: string) => {
    if (columnId === archiveColumnId) {
      const card = state.archive.cards.filter(
        (card: ICard) => card._id === cardId
      );
      setCurrentCard(card[0]);
      setCurrentColumn(state.archive);
    } else {
      const card = state.columns[columnId].cards.filter(
        (card: ICard) => card._id === cardId
      );
      setCurrentCard(card[0]);
      setCurrentColumn(state.columns[columnId]);
    }
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const addChecklist = (
    columnId: string,
    cardId: string,
    checklist: string
  ) => {
    fetch(`/api/add-checklist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId,
        checklist,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: IChecklist }) => {
        if (data.success) {
          state.columns[columnId].cards.map((card: ICard) => {
            if (card._id === cardId) {
              card.checklists.push(data.data);
            }
          });
          addActivity(
            columnId,
            cardId,
            `${checklist} is added to the checklist`
          );
          // updateDate(columnId, cardId);
          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while adding a checklist',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while adding a checklist:${err.message}`
        );
      });
  };

  const updateDate = (columnId: string, cardId: string) => {
    if (cardId) {
      state.columns[columnId].cards.map((card: ICard) => {
        if (card._id === cardId) {
          card.updatedAt = new Date();
        }
      });
    }
    state.columns[columnId].updatedAt = new Date();
    setState({
      ...state,
    });
  };

  const updateChecklist = (
    columnId: string,
    cardId: string,
    checklistId: string,
    checklistContent: string
  ) => {
    state.columns[columnId].cards.map((card: ICard) => {
      if (card._id === cardId) {
        card.checklists.map((checklist: IChecklist) => {
          if (checklist._id === checklistId) {
            checklist.checklist = checklistContent;
          }
        });
      }
    });
    updateDate(columnId, cardId);
    addActivity(
      columnId,
      cardId,
      `A checklist is updated to ${checklistContent}`
    );
    setState({
      ...state,
    });
  };

  const completeChecklist = (
    columnId: string,
    cardId: string,
    checklistId: string,
    isChecked: boolean
  ) => {
    state.columns[columnId].cards.map((card: ICard) => {
      if (card._id === cardId) {
        card.checklists.map((checklist: IChecklist) => {
          if (checklist._id === checklistId) {
            checklist.isChecked = isChecked;
          }
        });
      }
    });
    updateDate(columnId, cardId);
    if (isChecked) addActivity(columnId, cardId, `A checklist is completed`);
    else addActivity(columnId, cardId, `A checklist is changed to incomplete`);
    setState({
      ...state,
    });
  };

  const deleteChecklist = (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => {
    fetch(`/api/delete-checklist`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: checklistId,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; message: string }) => {
        if (data.success) {
          state.columns[columnId].cards.map((card: ICard) => {
            if (card._id === cardId) {
              card.checklists = card.checklists.filter(
                (checklist: IChecklist) => checklist._id !== checklistId
              );
            }
          });
          updateDate(columnId, cardId);
          addActivity(columnId, cardId, `A checklist is deleted`);
          setState({
            ...state,
          });
        } else {
          handleSnackbar(`Failed to delete a checklist`, 'warning');
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while deleting a checklist:${err.message}`
        );
      });
  };

  const convertDate = (date: Date) => {
    const formattedDate = new Date(date);
    const month = formattedDate.toString().split(' ')[1];
    const day = formattedDate.toString().split(' ')[2];
    const year = formattedDate.toString().split(' ')[3];
    return `${month} ${day}, ${year}`;
  };

  const addActivity = (columnId: string, cardId: string, activity: string) => {
    fetch(`/api/add-activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId,
        activity,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: IActivity }) => {
        if (data.success) {
          if (columnId === archiveColumnId) {
            state.archive.cards.map((card: ICard) => {
              if (card._id === cardId) {
                card.activities.unshift(data.data);
              }
            });
          } else {
            state.columns[columnId].cards.map((card: ICard) => {
              if (card._id === cardId) {
                card.activities.unshift(data.data);
              }
            });
          }
          if (activity.toLowerCase().includes('archive')) {
            handleSnackbar(activity, 'warning');
          } else {
            handleSnackbar(activity, 'info');
          }
          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while adding an activity',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting an activity:${err.message}`
        );
      });
  };

  const changeProjectName = (projectName: string) => {
    handleSnackbar(`Project name is changed to '${projectName}'`, 'info');
    props.setProjectName(projectName);
  };

  const handleSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <>
      {isLoadingCompleted && (
        <>
          <Top
            _id={props._id}
            setProjectName={changeProjectName}
            projectName={props.projectName}
          />
          <div className="board">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable
                direction="horizontal"
                droppableId="all-droppables"
                type="column"
              >
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.droppableProps.style
                    )}
                  >
                    {state.columnOrder.map(
                      (columnId: string, index: number) => {
                        return (
                          <Column
                            key={columnId}
                            column={state.columns[columnId]}
                            index={index}
                            addCard={addCard}
                            setOpen={setOpen}
                            setCardForOpen={setCardForOpen}
                            updateColumnTitle={updateColumnTitle}
                            deleteColumn={deleteColumn}
                            // onDragEnd={onDragEnd}
                            convertDate={convertDate}
                            open={true}
                            projectName={props.projectName}
                            handleModalClose={handleModalClose}
                            addChecklist={addChecklist}
                            updateChecklist={updateChecklist}
                            addActivity={addActivity}
                            updateDate={updateDate}
                            updateCard={updateCard}
                            completeChecklist={completeChecklist}
                            deleteChecklist={deleteChecklist}
                            deleteCard={deleteCard}
                            archiveCard={archiveCard}
                            archiveColumnId={archiveColumnId}
                          />
                        );
                      }
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {state.archive.cards.length > 0 && (
              <Archive
                index={0}
                // onDragEnd={onDragEnd}
                column={state.archive}
                archiveColumnId={archiveColumnId}
                setCardForOpen={setCardForOpen}
                convertDate={convertDate}
                setOpen={setOpen}
                open={true}
                projectName={props.projectName}
                handleModalClose={handleModalClose}
                updateColumnTitle={updateColumnTitle}
                deleteColumn={deleteColumn}
                addChecklist={addChecklist}
                updateChecklist={updateChecklist}
                addActivity={addActivity}
                updateDate={updateDate}
                updateCard={updateCard}
                completeChecklist={completeChecklist}
                deleteChecklist={deleteChecklist}
                deleteCard={deleteCard}
                addCard={addCard}
                archiveCard={archiveCard}
              />
            )}
            <AddColumn colorIndex={colorIndex} addColumn={addColumn} />
          </div>
          {open && (
            <CardModal
              open={true}
              // column={}
              addCard={addCard}
              projectName={props.projectName}
              currentCard={currentCard}
              currentColumn={currentColumn}
              handleModalClose={handleModalClose}
              addChecklist={addChecklist}
              updateChecklist={updateChecklist}
              addActivity={addActivity}
              updateDate={updateDate}
              updateCard={updateCard}
              completeChecklist={completeChecklist}
              deleteChecklist={deleteChecklist}
              convertDate={convertDate}
              deleteCard={deleteCard}
              archiveCard={archiveCard}
            />
          )}
        </>
      )}
    </>
  );
}
export default Board;
