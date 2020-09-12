import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Top from './top';
import Column from './column';
import AddSection from './add-section';
import { v4 as uuidv4 } from 'uuid';
import CardModal from './card-modal';

function Board(props: any) {
  const [state, setState] = useState({
    columns: {
      'column-0': {
        id: 'column-0',
        title: 'Plan',
        cards: [],
        colorIndex: 0,
      },
      'column-1': {
        id: 'column-1',
        title: 'Progress',
        cards: [],
        colorIndex: 1,
      },
      'column-2': {
        id: 'column-2',
        title: 'Complete',
        cards: [],
        colorIndex: 2,
      },
    },
    columnOrder: ['column-0', 'column-1', 'column-2'],
  } as any);

  const [colorIndex, setColorIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({} as any);

  useEffect(() => {
    setColorIndex(state.columnOrder.length - 1);
  }, []);

  const addCard = (columnId: any, cardTitle: any) => {
    const newCard = {
      id: uuidv4(),
      cardTitle,
    };
    state.columns[columnId].cards.push(newCard);
    setState({
      ...state,
    } as any);
  };

  const addSection = (sectionTitle: any) => {
    const newSection = {
      id: uuidv4(),
      title: sectionTitle,
      cards: [],
      colorIndex: colorIndex + 1,
    };
    setColorIndex(colorIndex + 1);
    state.columns[newSection.id] = newSection;
    state.columnOrder.push(newSection.id);
    setState({
      ...state,
    } as any);
  };

  const updateSectionTitle = (id: any, sectionTitle: any) => {
    state.columns[id].title = sectionTitle;
    setState({
      ...state,
    } as any);
  };

  const deleteColumn = (id: any) => {
    delete state.columns[id];
    state.columnOrder.splice(state.columnOrder.indexOf(id), 1);
    setState({
      ...state,
    } as any);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.type === 'column') {
      const columnOrder = reorder(
        state.columnOrder,
        result.source.index,
        result.destination.index
      );
      setState({
        ...state,
        columnOrder,
      } as any);
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const cards = reorder(
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

    setState(newState);
  };

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    display: 'flex',
    flexDirection: 'row',
    ...draggableStyle,
  });

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  //for modal
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = (columnId: any, cardId: any) => {
    const card = state.columns[columnId].cards.filter(
      (card: any) => card.id === cardId
    );
    console.log(card[0]);
    setCurrentCard(card[0]);
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Top
        setView={props.setView}
        setProjectName={props.setProjectName}
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
                {state.columnOrder.map((columnId: any, index: any) => {
                  return (
                    <Column
                      key={columnId}
                      column={state.columns[columnId]}
                      index={index}
                      reorder={reorder}
                      addCard={addCard}
                      handleModalOpen={handleModalOpen}
                      updateSectionTitle={updateSectionTitle}
                      deleteColumn={deleteColumn}
                      onDragEnd={onDragEnd}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddSection colorIndex={colorIndex} addSection={addSection} />
      </div>
      <CardModal
        open={open}
        handleModalClose={handleModalClose}
        currentCard={currentCard}
      />
    </>
  );
}
export default Board;
