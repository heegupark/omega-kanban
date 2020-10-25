import IChecklist from './ichecklist';
import IColumnItem from './icolumnitem';
import ICard from './icard';

export default interface IChecklistProps {
  currentColumn: IColumnItem;
  currentCard: ICard;
  addChecklist: (
    currentColumnId: string,
    currentCardId: string,
    checklist: string
  ) => void;
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklist: IChecklist
  ) => void;
  deleteChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => void;
}
