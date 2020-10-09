import INewCard from './inewcard';
import ICommonProps from './icommonprops';

export default interface ICardModalProps extends ICommonProps {
  open: boolean;
  // column: IColumnItem;
  projectName: string;
  handleModalClose: () => void;
  addChecklist: (columnId: string, cardId: string, checklist: string) => void;
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string,
    checklistContent: string
  ) => void;
  addActivity: (columnId: string, cardId: string, activity: string) => void;
  updateDate: (columnId: string, cardId: string) => void;
  updateCard: (columnId: string, card: INewCard) => void;
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
  convertDate: (date: Date) => string;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
}
