import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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

function Board(props: IMainProps) {
  const { enqueueSnackbar } = useSnackbar();

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
          columnOrder: [];
          archive: [IColumnItem];
        }) => {
          if (data.success) {
            state.columnOrder = [...data.columnOrder];
            state.archive = data.archive[0];
            setArchiveColumnId(data.archive[0]._id);
            data.columns.map((column: IColumnItem) => {
              state.columns[column._id] = column;
            });
            setState({
              ...state,
            });
            setColorIndex(data.columns.length);
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

  const deleteColumn = (columnId: string) => {
    const title = state.columns[columnId].title;
    fetch(`/api/delete-column`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId: props._id,
        columnId,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; message: string }) => {
        if (data.success) {
          delete state.columns[columnId];
          state.columnOrder.splice(state.columnOrder.indexOf(columnId), 1);
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
        columnId,
        cardId,
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

  const reorderCards = (column: IColumnItem, cards: []) => {
    fetch(`/api/reorder-card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        columnId: column._id,
        cards,
      }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean }) => {
        if (data.success) {
          handleSnackbar(`Cards are reordered in '${column.title}'`, 'success');
        } else {
          handleSnackbar(
            'Something wrong happened while reordering cards in a same column',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while reordering cards in a same column:${err.message}`
        );
      });
  };

  const reorderColumns = (
    sourceIndex: number,
    destIndex: number,
    columnOrder: []
  ) => {
    fetch(`/api/reorder-column`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: props._id, columnOrder }),
    })
      .then((res) => res.json())
      .then((data: { success: boolean }) => {
        if (data.success) {
          handleSnackbar(
            `'${state.columns[state.columnOrder[sourceIndex]].title}' and '${
              state.columns[state.columnOrder[destIndex]].title
            }' are reordered`,
            'success'
          );
        } else {
          handleSnackbar(
            'Something wrong happened while reordering columns',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while reordering columns:${err.message}`
        );
      });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    // Move column
    if (result.type === 'column') {
      const columnOrder: Array<string> = reorder(
        state.columnOrder as [],
        result.source.index,
        result.destination.index
      );
      setState({
        ...state,
        columnOrder,
      });
      reorderColumns(
        result.source.index,
        result.destination.index,
        columnOrder as []
      );
      return;
    }

    // Reorder cards in a same column
    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const pins = reorder(
        column.cards as [],
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
      reorderCards(column, cards as []);
      setState(newState);

      return;
    }

    // Move a card to a different column
    const sourceColumn = state.columns[result.source.droppableId];
    const destinationColumn = state.columns[result.destination.droppableId];
    const card = sourceColumn.cards[result.source.index];

    const newSourceColumn = {
      ...sourceColumn,
      cards: [...sourceColumn.cards],
    };
    newSourceColumn.cards.splice(result.source.index, 1);
    // reorderCards(sourceColumn, newSourceColumn.cards as []);

    const newDestinationColumn = {
      ...destinationColumn,
      cards: [...destinationColumn.cards],
    };
    newDestinationColumn.cards.splice(result.destination.index, 0, card);
    reorderCards(destinationColumn, newDestinationColumn.cards as []);

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

  const reorder = (list: [], startIndex: number, endIndex: number) => {
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
          updateDate(columnId, cardId);
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
    checklist: {
      _id: string;
      checklist: string | undefined;
      isChecked: boolean | undefined;
    }
  ) => {
    fetch(`/api/update-checklist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checklist),
    })
      .then((res) => res.json())
      .then((data: { success: boolean; data: ICard }) => {
        if (data.success) {
          state.columns[columnId].cards.map((card: ICard) => {
            if (card._id === cardId) {
              if (checklist.checklist) {
                card.checklists.map((item: IChecklist) => {
                  if (item._id === checklist._id) {
                    item.checklist = checklist.checklist as string;
                  }
                });
                updateDate(columnId, cardId);
                addActivity(
                  columnId,
                  cardId,
                  `A checklist is updated to ${checklist.checklist}`
                );
              }
              if (checklist.isChecked !== undefined) {
                if (checklist.isChecked) {
                  card.checklists.map((item: IChecklist) => {
                    if (item._id === checklist._id) {
                      item.isChecked = true;
                    }
                  });
                  updateDate(columnId, cardId);
                  addActivity(columnId, cardId, `A checklist is completed`);
                }
                console.log(checklist.isChecked);
                if (!checklist.isChecked) {
                  card.checklists.map((item: IChecklist) => {
                    if (item._id === checklist._id) {
                      item.isChecked = false;
                    }
                  });
                  updateDate(columnId, cardId);
                  addActivity(columnId, cardId, `A checklist is incompleted`);
                }
              }
            }
          });

          setState({
            ...state,
          });
        } else {
          handleSnackbar(
            'Something wrong happened while updating a checklist',
            'warning'
          );
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while updating a checklist:${err.message}`
        );
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

  const handleSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <>
      {isLoadingCompleted && (
        <>
          <Top
            _id={props._id}
            changeProjectName={props.changeProjectName}
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
                            convertDate={convertDate}
                            open={true}
                            currentColumn={currentColumn}
                            currentCard={currentCard}
                            projectName={props.projectName}
                            handleModalClose={handleModalClose}
                            addChecklist={addChecklist}
                            updateChecklist={updateChecklist}
                            addActivity={addActivity}
                            updateDate={updateDate}
                            updateCard={updateCard}
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
                column={state.archive}
                archiveColumnId={archiveColumnId}
                setCardForOpen={setCardForOpen}
                convertDate={convertDate}
                setOpen={setOpen}
                open={true}
                currentColumn={currentColumn}
                currentCard={currentCard}
                projectName={props.projectName}
                handleModalClose={handleModalClose}
                updateColumnTitle={updateColumnTitle}
                deleteColumn={deleteColumn}
                addChecklist={addChecklist}
                updateChecklist={updateChecklist}
                addActivity={addActivity}
                updateDate={updateDate}
                updateCard={updateCard}
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
