import IChecklist from './ichecklist';

export default interface IChecklistProps {
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
