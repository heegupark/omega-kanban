import ISection from './isection';
import IChecklistProps from './ichecklistprops';

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
  updateCardTitle: (
    columnId: string,
    cardId: string,
    cardTitle: string
  ) => void;
  updateCardNote: (columnId: string, cardId: string, note: string) => void;
  setDueDate: (columnId: string, cardId: string, date: Date) => void;
  convertDate: (date: Date) => string;
  completeCard: (columnId: string, cardId: string) => void;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
  // onDragEnd: (result: any) => void;
  updateSectionTitle: (columnId: string, sectionTitle: string) => void;
  deleteColumn: (id: string) => void;
}
