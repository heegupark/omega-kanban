import IColumnItem from './icolumnitem';
import ICard from './icard';

export default interface ICardProps {
  setCardForOpen: (columnId: string, cardId: string) => void;
  setOpen: (open: boolean) => void;
  column: IColumnItem;
  card: ICard;
  convertDate: (date: Date) => string;
  provided: any;
  isDragging: boolean;
}
