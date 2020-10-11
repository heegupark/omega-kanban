import ISection from './icolumnitem';
import IChecklistProps from './ichecklistprops';
import INewCard from './inewcard';

export default interface IColumnProps extends IChecklistProps {
  index: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  setCardForOpen: (columnId: string, cardId: string) => void;
  column: ISection;
  projectName: string;
  handleModalClose: () => void;
  addChecklist: (columnId: string, cardId: string, checklist: string) => void;
  addActivity: (columnId: string, cardId: string, activity: string) => void;
  updateDate: (columnId: string, cardId: string) => void;
  updateCard: (columnId: string, card: INewCard) => void;
  convertDate: (date: Date) => string;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
  // onDragEnd: (result: any) => void;
  updateColumnTitle: (_id: string, title: string) => void;
  deleteColumn: (id: string) => void;
  archiveColumnId: string;
}
