import IChecklist from './ichecklist';

export default interface IChecklistProps {
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklist: IChecklist
  ) => void;
  // completeChecklist: (
  //   columnId: string,
  //   cardId: string,
  //   checklistId: string,
  //   isChecked: boolean
  // ) => void;
  deleteChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => void;
}
