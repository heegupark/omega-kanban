import ICard from './icard';
import ISection from './isection';

export default interface IDueDateProps {
  currentCard: ICard;
  currentColumn: ISection;
  setDueDate: (columnId: string, cardId: string, date: Date) => void;
  convertDate: (date: Date) => string;
}
