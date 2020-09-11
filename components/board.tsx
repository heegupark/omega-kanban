import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Top from './top';
import Column from './column';
import AddSection from './add-section';
import { v4 as uuidv4 } from 'uuid';

const itemsFromBackend = [
  { id: uuidv4(), cardTitle: 'First task' },
  { id: uuidv4(), cardTitle: 'Second task' },
  { id: uuidv4(), cardTitle: 'Third task' },
  { id: uuidv4(), cardTitle: 'Fourth task' },
  { id: uuidv4(), cardTitle: 'Fifth task' },
];
function Board(props: any) {
  const [cardBoxes, setCardBoxes] = useState([{ title: 'progress' }]);
  const [state, setState] = useState({
    columns: {
      'column-0': {
        id: 'column-0',
        title: 'Plan',
        cards: itemsFromBackend,
      },
      'column-1': {
        id: 'column-1',
        title: 'Progress',
        cards: [],
      },
    },
    columnOrder: ['column-0', 'column-1'],
  } as any);

  const addCard = (columnId: any, card: any) => {
    state.columns[columnId].cards.push(card);
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

    console.log(result.source.droppableId);
    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const cards = reorder(
        column.cards,
        result.source.index,
        result.destination.index
      );

      // updating column entry
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

  const createCardBox = (cardBox: any) => {
    setCardBoxes([...cardBoxes, cardBox] as any);
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <>
      <Top projectName={props.projectName} />
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
                      onDragEnd={onDragEnd}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddSection createCardBox={createCardBox} />
      </div>
    </>
  );
}
export default Board;
