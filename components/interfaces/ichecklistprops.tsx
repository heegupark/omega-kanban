export default interface IChecklistProps {
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string,
    checklistContent: string
  ) => void;
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
}
