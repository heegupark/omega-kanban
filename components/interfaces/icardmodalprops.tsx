import IColumnItem from './icolumnitem';
import ICard from './icard';

export default interface ICardModalProps {
  open: boolean;
  column: IColumnItem;
  projectName: string;
  currentColumn: IColumnItem;
  handleModalClose: () => void;
  currentCard: ICard;
  addChecklist: (columnId: string, cardId: string, checklist: string) => void;
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string,
    checklistContent: string
  ) => void;
  addActivity: (columnId: string, cardId: string, activity: string) => void;
  updateDate: (columnId: string, cardId: string) => void;
  updateCardTitle: (
    columnId: string,
    cardId: string,
    cardTitle: string
  ) => void;
  updateCardNote: (columnId: string, cardId: string, note: string) => void;
  completeChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string,
    isChecked: boolean
  ) => void;
  deleteChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => void;
  setDueDate: (columnId: string, cardId: string, date: Date) => void;
  convertDate: (date: Date) => string;
  completeCard: (columnId: string, cardId: string) => void;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
}
