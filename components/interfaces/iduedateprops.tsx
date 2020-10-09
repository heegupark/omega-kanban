import ICard from './icard';
import IColumnItem from './icolumnitem';

export default interface IDueDateProps {
  currentCard: ICard;
  currentColumn: IColumnItem;
  setDueDate: (columnId: string, cardId: string, date: Date) => void;
  convertDate: (date: Date) => string;
}
