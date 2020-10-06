import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import Top from './top';
import Column from './column';
import AddSection from './add-section';
import Archive from './archive';
import CardModal from './card-modal';
import { VariantType, useSnackbar } from 'notistack';
import IMainProps from './interfaces/imainprops';
import IColumns from './interfaces/icolumns';
import ICard from './interfaces/icard';
import ISection from './interfaces/isection';
import IChecklist from './interfaces/ichecklist';

function Board(props: IMainProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState<IColumns>({
    columns: {
      'column-0': {
        id: 'column-0',
        title: 'Plan',
        cards: [
          {
            id: uuidv4(),
            cardTitle: 'Create HTML skeleton',
            note: '',
            isCardCompleted: false,
            isArchived: false,
            checklists: [],
            activities: [],
            dueDate: new Date(2020, 9, 11),
            createdAt: new Date(2020, 8, 11),
            updatedAt: new Date(2020, 8, 11),
          },
        ],
        colorIndex: 0,
        createdAt: new Date(2020, 8, 1),
        updatedAt: new Date(2020, 8, 11),
      },
      'column-1': {
        id: 'column-1',
        title: 'Progress',
        cards: [],
        colorIndex: 1,
        createdAt: new Date(2020, 8, 2),
        updatedAt: new Date(2020, 8, 2),
      },
      'column-2': {
        id: 'column-2',
        title: 'Complete',
        cards: [],
        colorIndex: 2,
        createdAt: new Date(2020, 8, 3),
        updatedAt: new Date(2020, 8, 3),
      },
    },
    columnOrder: ['column-0', 'column-1', 'column-2'],
    archive: {
      id: 'archive',
      title: 'Archive',
      cards: [],
      colorIndex: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const [colorIndex, setColorIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<ICard>();
  const [currentColumn, setCurrentColumn] = useState<ISection>();

  useEffect(() => {
    setColorIndex(state.columnOrder.length - 1);
  }, []);

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
      .then((data: any) => {
        if (data.success) {
          console.log(data.data);
        } else {
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting a route:${err.message}`
        );
      });
  };

  const addSection = (sectionTitle: string, card: ICard | undefined) => {
    const newSection: ISection = {
      id: uuidv4(),
      title: sectionTitle,
      cards: [],
      colorIndex: colorIndex + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    if (card) {
      newSection.cards.push(card);
    }
    handleSnackbar(`'${sectionTitle}' is created`, 'success');
    setColorIndex(colorIndex + 1);
    state.columns[newSection.id] = newSection;
    state.columnOrder.push(newSection.id);
    setState({
      ...state,
    });
  };

  const addCard = (columnId: string, cardTitle: string) => {
    const newCard = {
      id: uuidv4(),
      cardTitle,
      note: '',
      isCardCompleted: false,
      isArchived: false,
      checklists: [],
      activities: [],
      dueDate: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addActivity(
      columnId,
      newCard.id,
      `A card with title '${cardTitle}' is created in '${state.columns[columnId].title}'`
    );
    updateDate(columnId, '');
    state.columns[columnId].cards.push(newCard);
    setState({
      ...state,
    });
  };

  const completeCard = (columnId: string, cardId: string) => {
    let completeCard: ICard = {} as ICard;
    state.columns[columnId].cards.map((card: ICard, index: number) => {
      if (card.id === cardId) {
        card.isCardCompleted = true;
        completeCard = card;
        state.columns[columnId].cards.splice(index, 1);
      }
    });
    state.columns[columnId].cards.push(completeCard);
    updateDate(columnId, cardId);
    addActivity(columnId, cardId, `Card is completed`);
    setState({
      ...state,
    });
  };
  const updateSectionTitle = (columnId: string, sectionTitle: string) => {
    state.columns[columnId].title = sectionTitle;
    state.columns[columnId].updatedAt = new Date();
    setState({
      ...state,
    });
  };

  const updateCardTitle = (
    columnId: string,
    cardId: string,
    cardTitle: string
  ) => {
    state.columns[columnId].cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.cardTitle = cardTitle;
      }
    });
    updateDate(columnId, cardId);
    addActivity(columnId, cardId, `Card title is changed to ${cardTitle}`);
    setState({
      ...state,
    });
  };

  const updateCardNote = (columnId: string, cardId: string, note: string) => {
    state.columns[columnId].cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.note = note;
      }
    });
    updateDate(columnId, cardId);
    addActivity(columnId, cardId, `Card note is changed to ||${note}`);
    setState({
      ...state,
    });
  };

  const deleteColumn = (id: string) => {
    const title = state.columns[id].title;
    delete state.columns[id];
    state.columnOrder.splice(state.columnOrder.indexOf(id), 1);
    handleSnackbar(`'${title}' is deleted`, 'error');
    setState({
      ...state,
    });
  };

  const deleteCard = (columnId: string, cardId: string) => {
    state.columns[columnId].cards.map((card: ICard, index: number) => {
      if (card.id === cardId) {
        state.columns[columnId].cards.splice(index, 1);
      }
    });
    updateDate(columnId, cardId);
    handleSnackbar('A card is deleted', 'error');
    setState({
      ...state,
    });
  };

  const archiveCard = (columnId: string, cardId: string) => {
    let tempCard: ICard = {} as ICard;
    state.columns[columnId].cards.map((card: ICard, index: number) => {
      if (card.id === cardId) {
        card.isArchived = true;
        tempCard = card;
        state.columns[columnId].cards.splice(index, 1);
      }
    });
    updateDate(columnId, cardId);
    state.archive.cards.push(tempCard);
    addActivity('archive', cardId, `Card is archived`);
    setState({
      ...state,
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
          [column.id]: {
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
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
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
    if (columnId === 'archive') {
      const card = state.archive.cards.filter(
        (card: ICard) => card.id === cardId
      );
      setCurrentCard(card[0]);
      setCurrentColumn(state.archive);
    } else {
      const card = state.columns[columnId].cards.filter(
        (card: ICard) => card.id === cardId
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
    state.columns[columnId].cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.checklists.push({
          id: uuidv4(),
          checklist,
          isChecked: false,
          date: new Date(),
        });
      }
    });
    addActivity(columnId, cardId, `${checklist} is added to the checklist`);
    updateDate(columnId, cardId);
    setState({
      ...state,
    });
  };

  const updateDate = (columnId: string, cardId: string) => {
    if (cardId) {
      state.columns[columnId].cards.map((card: ICard) => {
        if (card.id === cardId) {
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
      if (card.id === cardId) {
        card.checklists.map((checklist: IChecklist) => {
          if (checklist.id === checklistId) {
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
      if (card.id === cardId) {
        card.checklists.map((checklist: IChecklist) => {
          if (checklist.id === checklistId) {
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
    state.columns[columnId].cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.checklists = card.checklists.filter(
          (checklist: IChecklist) => checklist.id !== checklistId
        );
      }
    });
    updateDate(columnId, cardId);
    addActivity(columnId, cardId, `A checklist is deleted`);
    setState({
      ...state,
    });
  };

  const convertDate = (date: Date) => {
    const month = date.toString().split(' ')[1];
    const day = date.toString().split(' ')[2];
    const year = date.toString().split(' ')[3];
    return `${month} ${day}, ${year}`;
  };

  const setDueDate = (columnId: string, cardId: string, date: Date) => {
    state.columns[columnId].cards.map((card: ICard) => {
      if (card.id === cardId) {
        card.dueDate = new Date(date);
      }
    });
    updateDate(columnId, cardId);
    addActivity(columnId, cardId, `A due date is set to ${convertDate(date)}`);
    setState({
      ...state,
    });
  };

  const addActivity = (columnId: string, cardId: string, activity: string) => {
    if (columnId === 'archive') {
      state.archive.cards.map((card: ICard) => {
        if (card.id === cardId) {
          card.activities.unshift({
            id: uuidv4(),
            activity,
            createdAt: new Date(),
          });
        }
      });
    } else {
      state.columns[columnId].cards.map((card: ICard) => {
        if (card.id === cardId) {
          card.activities.unshift({
            id: uuidv4(),
            activity,
            createdAt: new Date(),
          });
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
                {state.columnOrder.map((columnId: string, index: number) => {
                  return (
                    <Column
                      key={columnId}
                      column={state.columns[columnId]}
                      index={index}
                      addCard={addCard}
                      setOpen={setOpen}
                      setCardForOpen={setCardForOpen}
                      updateSectionTitle={updateSectionTitle}
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
                      updateCardTitle={updateCardTitle}
                      updateCardNote={updateCardNote}
                      completeChecklist={completeChecklist}
                      deleteChecklist={deleteChecklist}
                      setDueDate={setDueDate}
                      completeCard={completeCard}
                      deleteCard={deleteCard}
                      archiveCard={archiveCard}
                    />
                  );
                })}
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
            setCardForOpen={setCardForOpen}
            convertDate={convertDate}
            setOpen={setOpen}
            open={true}
            projectName={props.projectName}
            handleModalClose={handleModalClose}
            updateSectionTitle={updateSectionTitle}
            deleteColumn={deleteColumn}
            addChecklist={addChecklist}
            updateChecklist={updateChecklist}
            addActivity={addActivity}
            updateDate={updateDate}
            updateCardTitle={updateCardTitle}
            updateCardNote={updateCardNote}
            completeChecklist={completeChecklist}
            deleteChecklist={deleteChecklist}
            setDueDate={setDueDate}
            completeCard={completeCard}
            deleteCard={deleteCard}
            archiveCard={archiveCard}
            addCard={addCard}
          />
        )}
        <AddSection colorIndex={colorIndex} addSection={addSection} />
      </div>
      {open && (
        <CardModal
          open={true}
          projectName={props.projectName}
          currentColumn={currentColumn}
          handleModalClose={handleModalClose}
          currentCard={currentCard}
          addChecklist={addChecklist}
          updateChecklist={updateChecklist}
          addActivity={addActivity}
          updateDate={updateDate}
          updateCardTitle={updateCardTitle}
          updateCardNote={updateCardNote}
          completeChecklist={completeChecklist}
          deleteChecklist={deleteChecklist}
          setDueDate={setDueDate}
          convertDate={convertDate}
          completeCard={completeCard}
          deleteCard={deleteCard}
          archiveCard={archiveCard}
        />
      )}
    </>
  );
}
export default Board;
