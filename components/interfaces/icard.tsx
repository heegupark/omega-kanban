import IChecklist from './ichecklist';
import IActivity from './iactivity';

export default interface ICard {
  id: string;
  cardTitle: string;
  note: string;
  isCardCompleted: boolean;
  isArchived: boolean;
  checklists: Array<IChecklist>;
  activities: Array<IActivity>;
  dueDate: Date | undefined;
  createdAt: Date;
  updatedAt: Date;
}
