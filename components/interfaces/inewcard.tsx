export default interface INewCard {
  _id: string;
  columnId: string | undefined;
  cardTitle: string | undefined;
  note: string | undefined;
  isCardCompleted: boolean | undefined;
  isArchived: boolean | undefined;
  dueDate: Date | null;
}
